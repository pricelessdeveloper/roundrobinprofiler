import EquippedItem from "./EquippedItem";
import EquippedItemSet from "./EquippedItemSet";
import Character from "./Character";

export default interface CharacterEquipment {
    character: Character;
    equipped_item_sets: Array<EquippedItemSet>;
    equipped_items: Array<EquippedItem>;
}