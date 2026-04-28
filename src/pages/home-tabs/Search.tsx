import React, { useEffect, useState } from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardTitle, IonButton, IonIcon, IonGrid, IonCardContent, IonCardSubtitle, IonCardHeader, IonCol, IonRow, IonSearchbar, IonToolbar } from "@ionic/react";
import { chatboxEllipsesOutline, shareOutline, thumbsUp, thumbsUpOutline } from "ionicons/icons";


const Search: React.FC = () => {

    const Movies = [
        { name: "Parasite" },
        { name: "Train to Busan" },
        { name: "Oldboy" },
        { name: "The Handmaiden" },
        { name: "Burning" },
    ]

    const [searchText, setSearchText] = useState('');
    const [filtered, setFilteredGames] = useState(Movies);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredGames = Movies.filter(Movies =>
                Movies.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filteredGames);
        }, 400);

        return () => clearTimeout(debounce);
    }, [searchText]);



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                        <IonTitle>
                            Search
                        </IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>

                <IonSearchbar
                    placeholder="Search for movies..."
                    value={searchText}
                    debounce={0}
                    onIonInput={e => setSearchText(e.detail.value!)}
                />

                <IonList>
                    {filtered.map((item, index) => (
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
};

export default Search;