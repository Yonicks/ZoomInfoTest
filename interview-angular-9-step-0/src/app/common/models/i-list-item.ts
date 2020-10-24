export interface IListItem {
  id: string;
  label: string;
}


export class ListItem implements IListItem {
  id: string;
  label: string;



  constructor(id?: string, label?: string) {
    this.id = id;
    this.label = label;
  }
}
