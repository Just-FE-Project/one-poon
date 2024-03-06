import { generateDropdownList } from "@/card-detail/utils/constants";
import { AppBar } from "@/shared/components/app-bar/appBar";
import { Dropdown } from "@/shared/components/dropdown/dropdown";
import { LeftArrow } from "@/shared/components/left-arrow/leftArrow";


export const CardDetailAppBar = () => {
  return (
    <AppBar
      leftChildren={<LeftArrow />}
      rightChildren={<Dropdown itemList={generateDropdownList({ actions: { onDelete, onUpdate } })} />}
    />
  );
};
