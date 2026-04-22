import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonGrid, IonButton } from "@ionic/react";

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

            <IonContent>
                <IonList inset={true}>
                    {Movies.map((item, index) => (
                        <IonCard>
                            <IonGrid>
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                <IonCardHeader>
                                    <IonCardTitle>{item.name}</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                                <IonButton fill="outline">Like</IonButton>
                                <IonButton fill="outline">Comment</IonButton>
                                <IonButton fill="outline">Share</IonButton>
                            </IonGrid>
                        </IonCard>
                    ))}

                </IonList>
            </IonContent>
        </IonPage>
    );
}
export default Feed;