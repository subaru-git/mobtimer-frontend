import React, { FC } from "react";
import { Text } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

type MemberSettingProps = { member: string[] };

const MemberSetting: FC<MemberSettingProps> = ({ member }) => {
  const [members, setMembers] = React.useState(member);
  const reorder = (list: string[], start: number, end: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);
    return result;
  };
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const newMembers = reorder(
      members,
      result.source.index,
      result.destination.index
    );
    setMembers(newMembers);
  };
  return (
    <>
      <Text as="sub">Members</Text>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {members.map((member, index) => (
                <Draggable
                  key={`${member}-${index}`}
                  draggableId={`${member}-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Text fontSize="3xl">{member}</Text>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default MemberSetting;
