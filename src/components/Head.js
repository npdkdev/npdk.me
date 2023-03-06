import * as React from "react"
import Config from '../../config'

export const SEO = ({ title, description, pathname, children }) => {
  const seo = {
    title: title || Config.defaultTitle,
    description: description || Config.defaultDescription,
    image: `${Config.url}${Config.logo}`,
    url: `${Config.url}`,
  }

  return (
    <>
      <html lang="id" className="wf-poppins-n4-active wf-poppins-n5-active wf-poppins-n6-active wf-active" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="search engines" content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot" />
      <meta content="ALL" name="WEBCRAWLERS" />
      <meta content="ALL" name="SPIDERS" />
      <meta content="index,follow" name="robots" />
      <meta content="Indonesian" name="language" />
      <meta content="follow, all" name="Googlebot-Image" />
      <meta content="index,follow" name="googlebot" />
      <meta content="follow, all" name="Scooter" />
      <meta content="follow, all" name="msnbot" />
      <meta content="follow, all" name="alexabot" />
      <meta content="follow, all" name="Slurp" />
      <meta content="follow, all" name="ZyBorg" />
      <meta content="follow, all" name="Scooter" />
      <meta content="true" name="MSSmartTagsPreventParsing" />

      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}

export function Head({ title, description, image }) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </>
  )
}
