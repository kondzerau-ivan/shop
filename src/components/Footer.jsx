export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="page-footer blue-grey lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {currentDate} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/kondzerau-ivan/shop-react" target="_blank" rel="noreferrer">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}
