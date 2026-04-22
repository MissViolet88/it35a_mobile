import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";

const Feed: React.FC = () => {

    const Movies = [
        { name: "Parasite" },
        { name: "Train to Busan" },
        { name: "Oldboy" },
        { name: "The Handmaiden" },
        { name: "Burning" },
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen></IonContent>
        </IonPage>
    );
}
export default Feed;