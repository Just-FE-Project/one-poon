import { ICommentParameter } from '../types/parameter';

interface IProps {
  actions: {
    onDelete: () => void;
    onUpdate: () => void;
  };
}

export const generateDropdownList = ({ actions }: IProps) => [
  {
    text: '수정',
    action: actions.onUpdate
  },
  {
    text: '삭제',
    action: actions.onDelete
  }
];
