export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__phone">
          Call us at: <strong>+9999999999</strong>
        </div>
        <div className="footer__email">
          Send us email at: <strong>mail@mail.com</strong>
        </div>
      </div>
      <div className="footer__social-links">
        <a href="https://www.facebook.com/" className="bi-facebook"></a>
        <a href="https://www.instagram.com/" className="bi-instagram"></a>
        <a href="https://www.x.com/" className="bi-twitter-x"></a>
      </div>
    </footer>
  );
}
