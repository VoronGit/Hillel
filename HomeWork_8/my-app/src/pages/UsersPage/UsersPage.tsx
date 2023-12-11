import CardsField from '../../components/CardsField/CardsField';
import pageStyles from '../Pages.module.scss';

const UsersPage = () => {
  return (
    <div className={pageStyles.pageContainer}>
      <CardsField></CardsField>
    </div>
  )
}

export default UsersPage