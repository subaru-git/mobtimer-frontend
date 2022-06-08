import React, { FC, useEffect, useState } from "react";
import { Input, Text, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineDeleteForever } from "react-icons/md";

type MemberSettingProps = {
  members: string[];
  updateMember: (members: string[]) => void;
};

const MemberSetting: FC<MemberSettingProps> = ({ members, updateMember }) => {
  const [newMember, setNewMember] = useState("");
  const [membersCopy, setMembersCopy] = useState(members);
  useEffect(() => setMembersCopy(members), [members]);
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
    setMembersCopy(newMembers);
  };
  return (
    <>
      <Text as="sub">Members</Text>
      <Input
        onChange={(e) => {
          setNewMember(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateMember([...membersCopy, newMember]);
            setNewMember("");
            e.currentTarget.value = "";
          }
        }}
        placeholder="add new member"
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {membersCopy.map((member, index) => (
                <Draggable
                  key={`${member}-${index}`}
                  draggableId={`${member}-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Flex>
                        <Text fontSize="2xl" isTruncated>
                          {member}
                        </Text>
                        <Spacer />
                        <IconButton
                          aria-label="delete member"
                          variant="ghost"
                          icon={<MdOutlineDeleteForever />}
                          onClick={(e) => {
                            updateMember(
                              membersCopy.filter((_, i) => i !== index)
                            );
                          }}
                        />
                      </Flex>
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
