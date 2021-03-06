import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

/**
 * Seo component props type
 */
type SeoProps = {
  description?: string;
  lang?: string;
  meta?: ({ property?: string; content: string; name?: string } | undefined | null)[];
};

/**
 * Seo component to be included into various pages
 * @param description - of a page
 * @param lang - of a page
 * @param meta - of a page
 */
const Seo: React.FC<SeoProps> = ({ description = "", lang = "en", meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const defaultMetaData: object[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: "twoeyes | become binocular",
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: "twoeyes | become binocular",
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="twoeyes | become binocular"
      meta={defaultMetaData.concat(meta)}
    />
  );
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string,
      name: PropTypes.string,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default Seo;
