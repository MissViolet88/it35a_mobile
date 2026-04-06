import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const template: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Template</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );

};

export default template; 