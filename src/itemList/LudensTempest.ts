import { ScalingValuesForChampAbilities } from '../Champion/ScalingValuesForChampAbilities';
import { Damage } from '../Damage/Damage';
import { Item } from '../Item/Item';
import { ItemDynamicData } from '../Item/ItemDynamicData';
import { DamageType } from '../RawChampion/abilities/staticDataEnums';
import { RawItem } from '../RawItem/RawItem';

export class LudensTempest extends Item {
  constructor(rawItem: RawItem, dynamicData: ItemDynamicData) {
    super(rawItem, dynamicData);
    this.isMythic = true;
    this.isUnique = true;
  }

  override passiveDmg(): Damage[] {
    let value = 0;
    const { scalingValues } = this.dynamicData;

    value = 100 + scalingValues?.['% AP']! * 0.1;

    return [new Damage(DamageType.MAGIC_DAMAGE, value)];
  }
}
