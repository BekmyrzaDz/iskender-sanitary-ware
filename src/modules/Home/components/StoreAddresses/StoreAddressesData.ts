import { adressLogo, arrowUp, clock, location, phone } from "../../../../assets"
import { IStoreAdress } from "../../types"

export const storeAdressData: IStoreAdress[] = [
  {
    id: 0,
    logoImg: adressLogo,
    name: "Iskender home",
    text: "открыть в карте",
    arrowUpImg: arrowUp,
    locationImg: location,
    location: `
    Кыргызстан, г. Бишкек
    ул. Турусбекова A167
    `,
    clockImg: clock,
    clock: "08:00 - 22:00",
    phoneImg: phone,
    phone: "+996 500 345 345",
  },
  {
    id: 1,
    logoImg: adressLogo,
    name: "Iskender home",
    text: "открыть в карте",
    arrowUpImg: arrowUp,
    locationImg: location,
    location: `
    Кыргызстан, г. Бишкек
    ул. Лермонтова 6
    `,
    clockImg: clock,
    clock: "08:00 - 22:00",
    phoneImg: phone,
    phone: "+996 500 345 345",
  },
  {
    id: 2,
    logoImg: adressLogo,
    name: "Iskender home",
    text: "открыть в карте",
    arrowUpImg: arrowUp,
    locationImg: location,
    location: `
    Кыргызстан, г. Бишкек
    ул. Льва-Толстого 19
    `,
    clockImg: clock,
    clock: "08:00 - 22:00",
    phoneImg: phone,
    phone: "+996 500 345 345",
  },
]
