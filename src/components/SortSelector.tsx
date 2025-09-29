import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  sortOrderValue: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrderValue, sortOrder }: props) => {
  const Sorts = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Released Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];
  const currenrOrder = Sorts.find((order) => order.value === sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button display={"flex"} justifyContent={"space-between"}>
          <Text>Order by: {currenrOrder?.label || " Relevance"}</Text>
          <BsChevronDown size={4} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {Sorts.map((i) => (
              <Menu.Item
                onClick={() => sortOrderValue(i.value)}
                key={i.value}
                value={i.value}
              >
                {i.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
