export class Thesis {
    id: number;
    title_pl: string;
    title_eng: string;
    short_description: string;
    type: any;
    status: any;
    creation_date: Date;
}

enum Status {
	  zgłoszona,
    zaakceptowana,
    realizowana,
    zrealizowana,
}

enum Type {
	  inżynierska,
    licencjacka,
    magisterska,
}
