import React, { FC, useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

type MemberSettingProps = {
  members: string[];
  updateMember: (members: string[]) => void;
};

const MemberSetting: FC<MemberSettingProps> = ({ members, updateMember }) => {
  const [add, setAdd] = useState("");
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
    updateMember(newMembers);
  };
  return (
    <>
      <Text as="sub">Members</Text>
      <Input
        onChange={(e) => {
          setAdd(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateMember([...members, add]);
            setAdd("");
            e.currentTarget.value = "";
          }
        }}
        placeholder="add new member"
      />
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
                      <Text fontSize="2xl">{member}</Text>
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
