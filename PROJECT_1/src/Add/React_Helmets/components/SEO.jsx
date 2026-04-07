import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'My App',
  description = 'Default description',
  name = 'React App',
  type = 'Website',
}) => {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Open Graphs */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:name' content={name} />
      <meta property='og:type' content={type} />
    </Helmet>
  )
}

export default SEO
