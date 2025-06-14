function injectCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(to right, #dfe9f3, #ffffff);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form {
      background: #ffffff;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      width: 350px;
      animation: slideIn 0.5s ease;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      color: #333;
    }

    input {
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
      transition: border 0.3s ease;
    }

    input:hover {
      transform: translateY(-1px);
      border: 0.5px solid black;
      box-shadow: 0 0 3px gray;
      transition: 0.3s ease;
    }

    input:focus {
      border-color: #6e8efb;
      outline: none;
      box-shadow: 0 0 5px rgba(110, 142, 251, 0.3);
    }

    .error-message {
      font-size: 12px;
      color: #e63946;
      margin-top: -10px;
      margin-bottom: 10px;
      display: block;
    }

    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(to right, #6e8efb, #a777e3);
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background: linear-gradient(to right, #5a7cfa, #9b66dc);
    }
  `;
  document.head.appendChild(style);
}


document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.5
          });
        },
        async beforeEnter(data) {
          //if(data.next.namespace==='signup')
          injectCustomStyles(); 
        },
        async enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.5
          });
        }
      }
    ]
  });
});
