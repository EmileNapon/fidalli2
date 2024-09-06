import { Component } from '@angular/core';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent {
  educationList = [
    {
        title: "Institut Africain des Industries Culturelles (IAIC)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/WhatsApp-Image-2023-11-16-at-10.32.34-wpcf_380x254.jpeg",
        description: "Institut axé sur les industries culturelles en Afrique, offrant des formations dans les domaines de la culture et de l'industrie.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Ecole Supérieure Polytechnique de la Jeunesse (ESUP-J)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/WhatsApp-Image-2023-11-16-at-10.31.59.jpeg",
        description: "École spécialisée dans la formation polytechnique pour la jeunesse, avec un accent sur les technologies avancées et l'innovation.",
        schoolType: "Ecole supérieure privée",
        location: "Ouagadougou"
    },
    {
        title: "Ecole supérieure des Hautes Etudes TEchnologiques et Commerciales (HETEC)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/hetec-cover-wpcf_380x285.jpg",
        description: "École supérieure dédiée aux hautes études technologiques et commerciales, offrant des formations en ingénierie et en gestion.",
        schoolType: "Ecole supérieure privée",
        location: "Ouagadougou"
    },
    {
        title: 'Ecole Supérieure des Techniques Avancées (ESTA)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/IMG_0124-1-wpcf_380x175.jpg',
        description: 'École spécialisée dans les techniques avancées et les formations techniques de haut niveau.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: 'Ecole Supérieure de Commerce (ESC)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/esc-devanture-wpcf_380x227.jpg',
        description: 'École offrant des formations en commerce, management, et administration des affaires.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: 'Institut Teng Tuuma Géosciences (ITTGEO)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/ITTGEO-1-wpcf_380x214.jpg',
        description: 'Institut spécialisé dans les formations en géosciences et en exploration géologique.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: "Institut des Sciences Techniques et Management (ISTM)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/istm-150x105.jpg",
        description: "Institut offrant des formations dans les sciences techniques et le management.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Institut Superieur la Plume (ISP)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/IS-La-Plume-150x150.jpg",
        description: "Institut supérieur spécialisé dans divers domaines d'études.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Université Catholique de l'Afrique de l'Ouest, Unité Universitaire d'Ucao à Bobo-Dioulasso (UCAO)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ucao-bobo-150x150.jpg",
        description: "Université offrant des formations variées dans un cadre catholique en Afrique de l'Ouest.",
        schoolType: "Université",
        location: "Bobo-Dioulasso"
    },
    {
        title: "Université Joseph KI-ZERBO (UJAK)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ujak-150x150.jpg",
        description: "Université publique offrant une large gamme de formations académiques.",
        schoolType: "Université publique",
        location: "Ouagadougou"
    },
    {
        title: "Université Ouaga I Pr Joseph KI-ZERBO",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/uo1-150x150.jpg",
        description: "Université publique renommée pour ses programmes académiques diversifiés.",
        schoolType: "Université publique",
        location: "Ouagadougou"
    },
    {
        title: "Université de Koudougou (UK)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/uk-150x150.jpg",
        description: "Université offrant des formations variées à Koudougou.",
        schoolType: "Université",
        location: "Koudougou"
    },
    {
        title: "Université de Dédougou (UD)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ud-150x150.jpg",
        description: "Université offrant des formations académiques à Dédougou.",
        schoolType: "Université",
        location: "Dédougou"
    }
];


}
