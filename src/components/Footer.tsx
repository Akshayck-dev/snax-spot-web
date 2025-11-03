const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SnackDistro</h3>
            <p className="text-background/80">
              Your trusted partner for premium snack distribution.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-background/80 mb-2">
              Follow us for updates and promotions
            </p>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} SnackDistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
