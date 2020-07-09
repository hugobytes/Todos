import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {map, eq} from 'lodash/fp';
import {useSafeArea} from 'react-native-safe-area-view';

import {editListName} from 'actions';
import Task from 'containers/Task';
import ColorPicker from 'containers/ColorPicker';
import TaskAdder from 'containers/TaskAdder';
import Icon from 'components/Icon';

import {
  RootView,
  ContentView,
  Content,
  contentStyle,
  TitleArea,
  Title,
  AddTaskButton,
  AddTaskText,
} from './styles';

function List({route, lists, editListName}) {
  const [titleFocused, setTitleFocused] = useState(false);
  const [addingTask, setAddingTask] = useState(false);

  const {listId} = route.params;
  const list = lists[listId];
  const tasks = list.tasks;

  const [listName, setListName] = useState(list.name);
  const listNameInput = useRef(null);

  const safeAreaOffset = useSafeArea();
  const keyboardVerticalOffset = safeAreaOffset.top + 8;

  useEffect(() => {
    setTimeout(() => {
      if (eq('')(list.name)) listNameInput.current.focus();
    }, 50);
  }, [list.name]);

  function handleChangeText(text) {
    setListName(text);
  }

  function submitListNameChange() {
    editListName({listId, name: listName});
  }

  function handleFocus() {
    setTitleFocused(true);
  }

  function handleBlur() {
    setTitleFocused(false);
  }

  function handleAddTask() {
    setAddingTask(true);
  }

  function finishedAddingTasks() {
    setAddingTask(false);
  }

  return (
    <RootView>
      <ContentView
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <TitleArea>
          <Title
            returnKeyType="done"
            ref={listNameInput}
            onChangeText={handleChangeText}
            placeholder="New list"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={submitListNameChange}
            value={listName}
          />
        </TitleArea>

        <Content
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: true})
          }
          keyboardShouldPersistTaps="always"
          contentContainerStyle={contentStyle}
          showsVerticalScrollIndicator={false}>
          {map(({taskId, ...task}) => (
            <Task key={taskId} taskId={taskId} {...task} parentList={list} />
          ))(tasks)}
        </Content>

        {addingTask ? (
          <TaskAdder
            listId={listId}
            color={list.color}
            finished={finishedAddingTasks}
          />
        ) : titleFocused ? (
          <ColorPicker listId={listId} />
        ) : (
          <AddTaskButton
            color={list.color}
            activeOpacity={0.75}
            onPress={handleAddTask}>
            <Icon
              name="plus"
              fill="#fff"
              height={16}
              width={16}
              viewBox="0 0 24 24"
            />
            <AddTaskText>Add a task</AddTaskText>
          </AddTaskButton>
        )}
      </ContentView>
    </RootView>
  );
}

const mapStateToProps = ({lists}) => ({lists});
const mapDispatchToProps = (dispatch) => ({
  editListName: (payload) => dispatch(editListName(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
