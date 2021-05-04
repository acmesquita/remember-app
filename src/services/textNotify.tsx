export default function TextNotify() {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: "Vá lá beber água!",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
        },
      };
      console.log("notificado 2");
      reg.showNotification("Hora de ir ali", options);
    });
    console.log("notificado 1");
  } else {
    console.log("PEDINDO NOTIFICAÇÃO");
    Notification.requestPermission();
  }

  console.log("notificado");
}
