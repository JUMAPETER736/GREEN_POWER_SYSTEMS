

"use client";

export default function WhatsAppButton() {
  const phone = "265991234567"; // replace with real number
  const message = "Hello! I'm interested in solar energy solutions for my home/business.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 1000,
        width: 58,
        height: 58,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        textDecoration: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      <svg width={30} height={30} viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.444.659 4.733 1.807 6.706L2 30l7.563-1.78A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.885-1.607l-.422-.252-4.489 1.057 1.085-4.37-.277-.448A11.6 11.6 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.39-8.687c-.35-.175-2.07-1.02-2.39-1.137-.32-.117-.553-.175-.786.175-.233.35-.902 1.137-1.106 1.37-.204.233-.408.262-.758.087-.35-.175-1.478-.544-2.815-1.737-1.04-.928-1.742-2.073-1.946-2.423-.204-.35-.022-.539.153-.713.157-.156.35-.408.525-.612.175-.204.233-.35.35-.583.117-.233.058-.437-.029-.612-.087-.175-.786-1.894-1.077-2.594-.283-.681-.571-.588-.786-.599l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.195-1.223 2.914s1.252 3.38 1.427 3.613c.175.233 2.464 3.764 5.97 5.278.835.36 1.486.575 1.994.736.838.266 1.6.228 2.203.138.672-.1 2.07-.846 2.362-1.664.291-.817.291-1.518.204-1.664-.087-.146-.32-.233-.67-.408z"/>
      </svg>
    </a>
  );
}