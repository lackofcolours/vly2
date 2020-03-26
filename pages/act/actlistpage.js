// [@TODO] - remove Input once actual search component is done
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { FullPage, PageBannerNoTabs, PageBannerButtons } from '../../components/VTheme/VTheme'
import publicPage from '../../hocs/publicPage'
import ActAdd from '../../components/Act/ActAdd'
import ActListSection from '../../components/Act/ActListSection'
// const escapeRegex = require('../../server/util/regexUtil')

// const handleSearch = (value) => {
//   if (!value) { return false }
//   value = escapeRegex(value)

//   Router.push({
//     pathname: '/acts',
//     query: {
//       search: value
//     }
//   })
// }

export const ActListPage = ({ activities }) =>
  <FullPage>
    <Helmet>
      <title>Activites - Voluntarily</title>
    </Helmet>
    <PageBannerNoTabs>
      <h1>
        <FormattedMessage
          id='ActListPage.Title'
          defaultMessage='Activities'
          description='Title of page listing resources for teachers'
        />
      </h1>

      <PageBannerButtons>
        <ActAdd />
      </PageBannerButtons>
      <FormattedMessage
        defaultMessage='Find activities to help or be helped with'
        id='act.list.subtitle'
      />
    </PageBannerNoTabs>
    <ActListSection />
  </FullPage>

export default publicPage(ActListPage)
