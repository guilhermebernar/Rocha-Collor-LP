export default function ContactButton({ onClick }) {
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
        href="https://wa.me/5521999520783?text=Ol%C3%A1%2C+quero+saber+mais+sobre+as+solu%C3%A7%C3%B5es+de+pintura+premium+da+Rocha+Collor."
        target="_blank"
        onClick={onClick}
        style={{ 
          position: "fixed",
          zIndex: "100",
          bottom: "20px",
          padding: "12px",
          borderRadius: "8px",
          backgroundColor: "#2C2C2C",
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#ffffff",
          boxShadow: "2px 20px 46px 4px rgba(0,0,0,0.88)"
          }}
      >
        Fale Conosco e Transforme Seu Ambiente Agora!
      </a>
    </div>
  );
}
