import React from 'react'
import Masonry from 'react-masonry-css'
import { Fragment, memo, useState, useEffect, useRef } from 'react'
import { filter, last, trim, startCase } from 'lodash'
import Icon from '@hackclub/icons'
import Hls from 'hls.js'
import Image from 'next/image'
const dt = (d) => new Date(d).toLocaleDateString()

const year = new Date().getFullYear()
const tinyDt = (d) => dt(d).replace(`/${year}`, '').replace(`${year}-`, '')

// based on https://github.com/withspectrum/spectrum/blob/alpha/src/helpers/utils.js#L146
const timeSince = (
  previous,
  absoluteDuration = false,
  longForm = true,
  current = new Date().toISOString()
) => {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerWeek = msPerDay * 7
  const msPerMonth = msPerDay * 30 * 2
  const msPerYear = msPerDay * 365

  const future = new Date(previous) - new Date(current)
  const past = new Date(current) - new Date(previous)
  const elapsed = [future, past].sort()[1]

  let humanizedTime
  if (elapsed < msPerMinute) {
    humanizedTime = '< 1m'
  } else if (elapsed < msPerHour) {
    const now = Math.round(elapsed / msPerMinute)
    humanizedTime = longForm ? `${now} minute${now > 1 ? 's' : ''}` : `${now}m`
  } else if (elapsed < msPerDay) {
    const now = Math.round(elapsed / msPerHour)
    humanizedTime = longForm ? `${now} hour${now > 1 ? 's' : ''}` : `${now}h`
  } else if (elapsed < msPerWeek) {
    const now = Math.round(elapsed / msPerDay)
    humanizedTime = longForm ? `${now} day${now > 1 ? 's' : ''}` : `${now}d`
  } else if (elapsed < msPerMonth) {
    const now = Math.round(elapsed / msPerWeek)
    humanizedTime = longForm ? `${now} week${now > 1 ? 's' : ''}` : `${now}w`
  } else if (elapsed < msPerYear) {
    const now = Math.round(elapsed / msPerMonth)
    humanizedTime = longForm ? `${now} month${now > 1 ? 's' : ''}` : `${now}mo`
  } else {
    const now = Math.round(elapsed / msPerYear)
    humanizedTime = longForm ? `${now} year${now > 1 ? 's' : ''}` : `${now}y`
  }

  if (absoluteDuration) {
    return humanizedTime
  } else {
    return elapsed > 0 ? `${humanizedTime} ago` : `in ${humanizedTime}`
  }
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
].map((m) => m.substring(0, 3))
const convertTimestampToDate = (timestamp) => {
  const isToday =
    new Date().toISOString().substring(0, 10) ===
    timestamp.toString().substring(0, 10)
  let date = new Date(timestamp)
  let week = days[date.getDay()]
  let day = date.getDate()
  let monthIndex = date.getMonth()
  let month = monthNames[monthIndex]
  let year = date.getFullYear()
  let hours = date.getHours() || 0
  let cleanHours
  if (hours === 0) {
    cleanHours = 12 // if timestamp is between midnight and 1am, show 12:XX am
  } else {
    cleanHours = hours > 12 ? hours - 12 : hours // else show proper am/pm
  }
  let minutes = date.getMinutes()
  minutes = minutes >= 10 ? minutes : '0' + minutes.toString() // turns 4 minutes into 04 minutes
  let ampm = hours >= 12 ? 'pm' : 'am'
  return isToday
    ? `${cleanHours}:${minutes}${ampm}`
    : `${week}, ${month} ${day}`
}

const proxy = (str) =>
  str
    ? str.replace(
        'https://dl.airtable.com/.attachmentThumbnails',
        '/attachments'
      ) + '/'
    : ''

const dataDetector = /(<.+?\|?\S+>)|(@\S+)|(`{3}[\S\s]+`{3})|(`[^`]+`)|(_[^_]+_)|(\*[^\*]+\*)|(:[^ .,;`\u2013~!@#$%^&*(){}=\\:"<>?|A-Z]+:)/

const formatText = (text) =>
  text.split(dataDetector).map((chunk, i) => {
    if (chunk?.startsWith(':') && chunk?.endsWith(':')) {
      return <CustomEmoji name={chunk} key={i} />
    }
    if (chunk?.startsWith('@') || chunk?.startsWith('<@')) {
      const punct = /([,!:.'"’”]|’s|'s|\))+$/g
      const username = chunk.replace(/[@<>]/g, '').replace(punct, '')
      return (
        <Fragment key={i}>
          <Mention username={username} />
          {chunk.match(punct)}
        </Fragment>
      )
    }
    if (chunk?.startsWith('<')) {
      const parts = chunk.match(/<(([^\|]+)\|)?([^>]+?)>/)
      const url = parts?.[2] || last(parts)
      const children = last(parts)
        ?.replace(/https?:\/\//, '')
        .replace(/\/$/, '')
      return (
        <a href={url} target='_blank' rel='noopener' key={i}>
          {children}
        </a>
      )
    }
    if (chunk?.startsWith('```')) {
      return <pre key={i}>{chunk.replace(/```/g, '')}</pre>
    }
    if (chunk?.startsWith('`')) {
      return <code key={i}>{chunk.replace(/`/g, '')}</code>
    }
    if (chunk?.startsWith('*')) {
      return <strong key={i}>{chunk.replace(/\*/g, '')}</strong>
    }
    if (chunk?.startsWith('_')) {
      return <i key={i}>{chunk.replace(/_/g, '')}</i>
    }
    return <Fragment key={i}>{chunk?.replace(/&amp;/g, '&')}</Fragment>
  })

const Content = memo(({ children }) => (
  <article className='post-text'>{formatText(children)}</article>
))

const StaticMention = memo(
  ({ user = {}, className = '', size = 24, children, ...props }) => (
    <a href={`/${user.username}`}>
      <a className={`mention ${className}`} {...props}>
        <Image
          src={user.avatar}
          alt={user.username}
          loading='lazy'
          width={size}
          height={size}
          className='mention-avatar'
        />
        @{user.username}
        {children}
      </a>
    </a>
  )
)

const EmojiImg = ({ name, ...props }) => (
  <div
    style={{
      height: !props.height ? '18px' : `${props.height}px`,
      verticalAlign: 'middle'
    }}
  >
    <Image
      alt={name + ' emoji'}
      loading='lazy'
      className='post-emoji'
      width={18}
      height={18}
      {...props}
    />
  </div>
)

const CustomEmoji = memo(({ name }) => {
  const emoji = stripColons(name)
  let [image, setImage] = useState(null)
  useEffect(() => {
    try {
      fetch('https://scrapbook.hackclub.com/api/emoji/')
        .then((r) => r.json())
        .then((emojis) => {
          if (emojis[emoji]) {
            setImage(emojis[emoji])
            return
          }
          setImage(
            'https://emoji.slack-edge.com/T0266FRGM/parrot/c9f4fddc5e03d762.gif'
          )
        })
    } catch (e) {}
  }, [])
  return image ? <EmojiImg src={image} name={emoji} /> : <span>:{emoji}:</span>
})

const stripColons = (str) => {
  const colonIndex = str.indexOf(':')
  if (colonIndex > -1) {
    // :emoji:
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex)
      return stripColons(str)
    } else {
      str = str.substr(colonIndex + 1)
      return stripColons(str)
    }
  }
  return str
}

const Video = ({ mux, ...props }) => {
  const videoRef = useRef(null)
  const src = `https://stream.mux.com/${mux}.m3u8`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.controls = true
    let hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      )
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src, videoRef])

  return (
    <video
      ref={videoRef}
      poster={`https://image.mux.com/${mux}/thumbnail.jpg?width=512&fit_mode=pad&time=0`}
      className='post-attachment'
      id={mux}
      controls
      playsInline
      loop
      preload='metadata'
      onMouseOver={(e) => e.target.play()}
      onMouseOut={(e) => e.target.pause()}
      {...props}
    />
  )
}

const Mention = memo(({ username }) => {
  const [img, setImg] = useState(null)
  useEffect(() => {
    try {
      fetch(`https://scrapbook.hackclub.com/api/profiles/${trim(username)}/`)
        .then((r) => r.json())
        .then((profile) => setImg(profile.avatar))
    } catch (e) {}
  }, [])
  return (
    <a href={`/${username}`}>
      <a className='mention post-text-mention'>
        {img && (
          <Image
            src={img}
            alt={username}
            loading='lazy'
            width={24}
            height={24}
            className='mention-avatar post-text-mention-avatar'
          />
        )}
        @{username}
      </a>
    </a>
  )
})

const Reaction = ({ name, char, url }) => (
  <a href={`https://scrapbook.hackclub.com/r/${name}`}>
    <a className='post-reaction' title={startCase(name)}>
      {url && (
        <EmojiImg
          src={url}
          name={name}
          width={24}
          height={24}
          layout='responsive'
        />
      )}
      {char}
    </a>
  </a>
)

const Post = ({
  id = new Date().toISOString(),
  profile = false,
  user = {
    username: 'abc',
    avatar: '',
    displayStreak: false,
    streakCount: 0
  },
  text,
  attachments = [],
  mux = [],
  reactions = [],
  postedAt,
  hideReactions,
  slackUrl,
  muted = false
}) => (
  <section
    className='post'
    id={id}
    style={muted ? { opacity: muted, pointerEvents: 'none' } : null}
  >
    {profile || !user ? (
      <header className='post-header'>
        <time
          className='post-header-date'
          data-tip
          data-for={`tip-${id}`}
          dateTime={postedAt}
        >
          {postedAt?.startsWith('20')
            ? convertTimestampToDate(postedAt)
            : postedAt}
        </time>
      </header>
    ) : (
      <a href={`https://scrapbook.hackclub.com/${user.username}`}>
        <a className='post-header'>
          {user.avatar && (
            <Image
              loading='lazy'
              src={user.avatar}
              width={48}
              height={48}
              alt={user.username}
              className='post-header-avatar'
            />
          )}
          <section className='post-header-container'>
            <span className='post-header-name'>
              <strong>@{user.username}</strong>
            </span>
            <time className='post-header-date' dateTime={postedAt}>
              {postedAt?.startsWith('20')
                ? convertTimestampToDate(postedAt)
                : postedAt}
            </time>
          </section>
        </a>
      </a>
    )}
    <Content>{text}</Content>
    {(attachments.length > 0 || mux.length > 0) && (
      <div className='post-attachments'>
        {filter(attachments, (a) =>
          a?.type?.toString().startsWith('image')
        ).map((img) => (
          <a
            key={img.url}
            target='_blank'
            title={img.filename}
            className='post-attachment'
          >
            <Image
              alt={img.filename}
              src={img.thumbnails?.large?.url || img.url}
              loading='lazy'
              width={img.thumbnails?.large?.width}
              height={img.thumbnails?.large?.height}
              layout={!img.thumbnails?.large?.width ? 'fill' : null}
            />
          </a>
        ))}
        {filter(attachments, (a) =>
          a?.type?.toString().startsWith('audio')
        ).map((aud) => (
          <audio
            key={aud.url}
            className='post-attachment'
            src={aud.url}
            controls
            preload='metadata'
          />
        ))}
        {mux.map((id) => (
          <Video key={id} mux={id} />
        ))}
      </div>
    )}
    {reactions.length > 0 && !profile && (
      <footer className='post-reactions' aria-label='Emoji reactions'>
        {reactions.map((reaction) => (
          <Reaction key={id + reaction.name} {...reaction} />
        ))}
      </footer>
    )}
  </section>
)

const Posts = ({
  posts = [],
  colors = {},
  fonts = {},
  hideReactions
}) => [
  <div className='scrapbook-widget'>
    <Masonry
      key='masonry'
      breakpointCols={{
        10000: 3,
        1024: 3,
        640: 2,
        480: 1,
        default: 1
      }}
      className='masonry-posts'
      columnClassName='masonry-posts-column'
    >
      {posts.map((post) =>
        hideReactions == true ? (
          <Post key={post.id} {...post} profile />
        ) : (
          <Post key={post.id} {...post} />
        )
      )}
    </Masonry>
  </div>,
  <style jsx key='masonry-style'>{`
    .masonry-posts {
      display: flex;
      width: 100%;
      max-width: 100%;
    }
    .masonry-posts-column {
      background-clip: padding-box;
    }
    .post {
      margin-bottom: 2px;
    }
    @media (min-width: 32em) {
      .masonry-posts {
        display: flex;
        width: calc(100% + 12px);
        max-width: calc(100% + 12px);
      }
      .masonry-posts {
        margin-left: -12px;
      }
      .masonry-posts-column {
        padding-left: 12px;
      }
      .post {
        border-radius: 12px;
        margin-bottom: 12px;
      }
    }
    @media (min-width: 64em) {
      .masonry-posts {
        display: flex;
        width: calc(100% + 24px);
        max-width: calc(100% + 24px);
      }
      .masonry-posts {
        margin-left: -24px;
      }
      .masonry-posts-column {
        padding-left: 24px;
      }
      .post {
        margin-bottom: 24px;
      }
    }
    /* add css module styles here (optional) */

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    :root {
      color-scheme: dark dark;
      --fonts-scrapbook-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, sans-serif;
      --fonts-scrapbook-display: system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, sans-serif;
      --fonts-scrapbook-mono: monospace;

      --colors-scrapbook-darker: #151613;
      --colors-scrapbook-dark: #20201d;
      --colors-scrapbook-darkless: #2b2b27;
      --colors-scrapbook-black: #151613;
      --colors-scrapbook-slate: #3b413a;
      --colors-scrapbook-muted: #777f76;
      --colors-scrapbook-smoke: #d5d8d5;
      --colors-scrapbook-snow: #f5f5f4;
      --colors-scrapbook-white: #ffffff;
      --colors-scrapbook-pink: #ff62dc;
      --colors-scrapbook-orange: #ff5b00;
      --colors-scrapbook-yellow: #f7ff00;
      --colors-scrapbook-green: #28ff00;
      --colors-scrapbook-cyan: #00ffff;
      --colors-scrapbook-blue: #00a4ff;
      --colors-scrapbook-purple: #c210ff;
      --colors-scrapbook-red: #ec3750;

      --colors-scrapbook-text: var(--colors-scrapbook-black);
      --colors-scrapbook-background: var(--colors-scrapbook-snow);
      --colors-scrapbook-sheet: var(--colors-scrapbook-white);
      --colors-scrapbook-elevated: var(--colors-scrapbook-white);
      --colors-scrapbook-sunken: var(--colors-scrapbook-smoke);
      --colors-scrapbook-progress: var(--colors-scrapbook-red);

      ${Object.keys(colors)
        .map((x) => `--colors-scrapbook-${x}: ${colors[x]};`)
        .join('')}
      ${Object.keys(fonts)
        .map((x) => `--fonts-scrapbook-${x}: ${fonts[x]};`)
        .join('')}
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --colors-scrapbook-text: var(--colors-scrapbook-white);
        --colors-scrapbook-background: var(--colors-scrapbook-darker);
        --colors-scrapbook-sheet: var(--colors-scrapbook-darkless);
        --colors-scrapbook-elevated: var(--colors-scrapbook-darkless);
        --colors-scrapbook-sunken: var(--colors-scrapbook-darker);
      }
    }

    html {
      height: 100%;
      box-sizing: border-box;
    }

    .scrapbook-widget {
      position: relative;
      min-height: 100%;
      margin: 0;
      line-height: 1.5;
      font-family: var(--fonts-scrapbook-body);
      font-weight: 400;
      scroll-behavior: smooth;
      background-color: var(--colors-scrapbook-background);
      color: var(--colors-scrapbook-text);
    }

    img {
      max-width: 100%;
    }

    .posts {
      display: grid;
      grid-gap: 1px;
      border-radius: 16px;
      overflow: hidden;
      background-color: var(--colors-scrapbook-sunken);
    }

    @media (min-width: 32em) {
      .posts {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      }
    }

    .post {
      padding: 16px;
      background-color: var(--colors-scrapbook-elevated);
      position: relative;
      width: 100%;
    }

    .post-header {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      line-height: 1;
    }
    .post-header div:first-child {
      flex-shrink: 0;
    }
    .post-header-avatar {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      margin-right: 12px;
    }
    div + .post-header-container {
      padding-left: 8px;
    }
    .post-header-name {
      font-size: 16px;
      word-break: break-all;
      word-wrap: break-word;
      display: flex;
      align-items: center;
      padding-bottom: 3px;
    }
    .post-header-css {
      color: var(--colors-scrapbook-pink);
    }
    .post-header-audio {
      color: var(--colors-scrapbook-orange);
      transform: rotate(45deg);
    }
    .post-header-streak {
      display: none;
    }
    .css {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--colors-muted);
      margin-top: 32px;
    }
    .css-icon {
      margin-left: -4px;
      margin-right: 8px;
    }
    .css-link {
      flex: 1 1 auto;
      word-wrap: break-word;
      word-break: break-all;
      color: inherit;
      font-size: 14px;
      font-family: var(--fonts-mono);
    }
    .post-header-date {
      color: var(--colors-scrapbook-muted);
      font-family: 14px;
    }
    .post-header > .post-header-date {
      margin-left: 0;
      color: var(--colors-scrapbook-text);
      font-size: 18px;
      font-weight: bold;
    }

    .post-text {
      font-size: 18px;
      word-wrap: break-word;
      white-space: pre-line;
    }
    .post-text > div {
      display: inline-block;
    }
    .post-emoji {
      object-fit: contain;
    }
    .post-text a {
      color: var(--colors-scrapbook-blue);
    }
    a.post-text-mention {
      color: var(--colors-scrapbook-purple);
    }
    .post-text pre,
    .post-text code {
      background-color: var(--colors-scrapbook-background);
      border-radius: 3px;
      color: var(--colors-scrapbook-purple);
      font-family: var(--fonts-scrapbook-mono);
      font-size: 0.9em;
      white-space: pre-wrap;
      padding: 0 0.25em;
    }

    .post-attachments {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;
      align-items: center;
      margin-top: 16px;
    }
    .post-attachment {
      border-radius: 6px;
      overflow: hidden;
      width: 100%;
      text-align: center;
    }
    a.post-attachment {
      line-height: 0;
    }
    img.post-attachment img.is-loading {
      filter: blur(15px);
    }
    .post-attachment img {
      border-radius: 6px;
      background-color: var(--colors-scrapbook-slate);
      object-fit: cover;
      max-width: 100%;
      height: auto;
      max-height: 384px !important;
    }

    video.post-attachment {
      border-radius: 6px;
      background-color: var(--colors-scrapbook-background);
      max-width: 100%;
      max-height: 384px !important;
      object-fit: contain;
    }
    video.post-attachment,
    audio.post-attachment,
    a.post-attachment:first-child:last-child {
      grid-column: span 2;
    }

    .post-reactions {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
      margin-bottom: -12px;
    }
    .post-reaction {
      display: inline-block;
      text-decoration: none;
      font-size: 20px;
      margin-right: 12px;
      margin-bottom: 12px;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: var(--colors-scrapbook-background);
      border: 1px dashed var(--colors-scrapbook-sunken);
      border-radius: 24px;
      transition: 0.125s background-color ease-in-out;
    }
    .post-reaction:hover,
    .post-reaction:focus {
      background-color: var(--colors-scrapbook-cyan);
      border-color: var(--colors-scrapbook-blue);
    }
    .post-reaction > div {
      margin: 5px !important;
      border-radius: 4px;
      overflow: hidden;
      width: 24px;
      height: 24px;
    }

    /* latin */
    @font-face {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Baloo 2 Regular'), local('Baloo2-Regular'),
        url(https://fonts.gstatic.com/s/baloo2/v1/wXKrE3kTposypRyd51jcAM4olXc.woff2)
          format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* latin */
    @font-face {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Baloo 2 Bold'), local('Baloo2-Bold'),
        url(https://fonts.gstatic.com/s/baloo2/v1/wXKuE3kTposypRyd7-P5FeMKmF0xvdg.woff2)
          format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* latin */
    @font-face {
      font-family: 'Shrikhand';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Shrikhand Regular'), local('Shrikhand-Regular'),
        url(https://fonts.gstatic.com/s/shrikhand/v5/a8IbNovtLWfR7T7bMJwrA4KR8TtctQ.woff2)
          format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `}</style>
]

export default Posts
