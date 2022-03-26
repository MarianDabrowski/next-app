import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollEvents>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton color="danger">Cick me</IonButton>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
