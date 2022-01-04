import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/zachhale-icon.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        Written by <strong>Zach Hale</strong> who lives in Seattle, rides bikes a lot, and works on
        {' '}
        <a href="https://bikeinsights.com">
          Bike Insights
        </a>
        {' and '}
        <a href="https://everydayrides.com">
          Everyday Rides
        </a>
        . Follow him on
        {' '}
        <a href="https://www.instagram.com/zachhale">
          Instagram
        </a>
        {' and '}
        <a href="https://www.flickr.com/photos/zachhale">
          Flickr
        </a>
        .
      </p>
    </div>
  )
}

export default Bio
