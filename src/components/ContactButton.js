// components/ContactButton.js
export default function ContactButton() {
  return (
    <div
      style={{ 
          position: "fixed",
          zIndex: "99",
          width: "100%",
          height: "fit-content",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}
    >
      <a
        href="https://wa.me/5521999520783?text=Ol%C3%A1%2C+tenho+interesse+nos+produtos+da+Rocha+Collor."
        target="_blank"
        style={{ 
          position: "fixed",
          zIndex: "100",
          bottom: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#865839",
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "2px 20px 46px 4px rgba(0,0,0,0.88)"
          }}
      >
        Manda um Whats rápido aqui!
      </a>
    </div>
  );
}
