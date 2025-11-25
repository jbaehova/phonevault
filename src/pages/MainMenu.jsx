import { useNavigate } from 'react-router-dom';
import styles from './MainMenu.module.css';

const MainMenu = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.menuBody}>
        <div className={styles.menuContainer}>
          <div className={styles.header}>
            <button onClick={handleBack} className={styles.backButton}>
              ← 뒤로
            </button>
            <h1 className={styles.title}>메뉴</h1>
          </div>
          <div className={styles.menuContent}>
            <button
              className={styles.menuButton}
              onClick={() => navigate('/contacts')}
            >
              전화
            </button>
            <button
              className={styles.menuButton}
              onClick={() => navigate('/settings')}
            >
              설정
            </button>
            <button
              className={styles.menuButton}
              onClick={() => navigate('/unlock')}
            >
              꺼내기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;