import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <p>© 2025 My Website. All Rights Reserved.</p>
      </footer>
    );
  }
}

const styles = {
  footer: {
    background: '#282c34',
    padding: '15px',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Footer;
