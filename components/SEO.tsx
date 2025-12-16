import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  image?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website', 
  name = 'KN Chemizol', 
  image = 'https://www.chemizol.com/og-image.jpg',
  schema 
}) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | KN Chemizol</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content="@KNChemizol" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* GEO Tags for Local SEO (Bidadi/Ramanagara Strategy) */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bidadi, Ramanagara" />
      <meta name="geo.position" content="12.7850;77.4150" />
      <meta name="ICBM" content="12.7850, 77.4150" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;