import React from 'react';
import './App.css';
import logo from './assets/logo.jpg'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="cv-container">
      {/* Kişisel Bilgiler */}
      <header className="header">
        <img className='profile-picture' src={logo} alt="" />
        <h1>Mehmet Musa Kaya</h1>
        <p>mehmet.kaya6@kun.edu.tr | +90 544 559 53 21</p>
      </header>

      {/* Eğitim Bilgileri */}
      <section className="section">
        <h2>Eğitim Bilgileri</h2>
        <ul>
          <li>
            <strong>Üniversite:</strong> <a href="https://kapadokya.edu.tr/" target='_blank'>Kapadokya Üniversitesi</a>
          </li>
          <li>
            <strong>Bölüm:</strong> Bilgisayar Programcılığı
          </li>
          <li>
            <strong>Mezuniyet Yılı:</strong> 2025
          </li>
        </ul>
      </section>

      {/* İş Deneyimi */}
      <section className="section">
        <h2>İş Deneyimi</h2>
        <ul>
          <li>
            <strong>Şirket Adı:</strong> Vodefone<br />
            <strong>Pozisyon:</strong> Teknisyen<br />
            <strong>Çalışma Süresi:</strong> 2023 - 2024<br />
          </li>
        </ul>
      </section>

      {/* Yetenekler */}
      <section className="section">
        <h2>Yetenekler</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C#</li>
        </ul>
      </section>

      {/* Hobiler ve İlgi Alanları */}
      <section className="section">
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          <li>Kitap Okuma</li>
          <li>Fotoğrafçılık</li>
          <li>Seyahat</li>
        </ul>
      </section>

      <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/ksm_musa/?__pwa=1" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
    </div>
  );
}

export default App;
