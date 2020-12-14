import React from 'react'
import "./event.css"
import { Actions } from '../Actions/Actions'

export const Event = () => {
    return (
        <div className="event">
            <div>
                <div className="event-image">
                    <div className="event-date">
                        <p>FEV</p>
                        <p>5</p>
                    </div>
                </div>
                <h1>Team building - Cooking Party Challenge</h1>
                <div className="event-time">
                    <p>19:00 - 22:30</p>
                </div>
                <div className="event-description">
                    <div className="availability">
                        <p>Places restantes</p>
                        <p>32</p>
                    </div>
                    <div className="closing-date">
                        <p>Date de clôtures</p>
                        <p>2 janvier 2021</p>
                    </div>
                </div>
                <div className="event-text">
                    <p>Transformez votre équipe en une véritable brigade de cuisinier et plongez vous dans l'atmosphère d'un véritable restaurant ! Vous devrez imaginer et concevoir votre repas à partir d'un panier d'ingrédients surprise, le tout sans recette ! Des équipes sont constituées, chacune d'elle aura la responsabilité de créer une entrée, un plat ou un dessert. La première phase de l'animation Cooking Party Challenge est dédiée à la réflexion : écriture des recettes, répartition des tâches, organisation du dressage, décoration des assiettes... Après la validation de l'un de nos chefs de cuisine professionnel, place à la réalisation ! Nos chefs animateurs encadrent et accompagnent les marmitons, en veillant à la bonne humeur et la convivialité! Vous profitez ensuite tous ensemble du fruit de votre travail autour d'un bon repas. Prêt pour le Cooking Party Challenge ?</p>
                </div>
                <Actions/>
            </div>
        </div>
    )
}
