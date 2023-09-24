import React from 'react'

// styles
import s from './index.module.scss'

// types and interfaces
import { Label } from '../../../constants/project-list.constant';

// assets
import { ReactComponent as ReactLabelIcon } from '../../../assets/labels/react.svg';
import { ReactComponent as VueLabelIcon } from '../../../assets/labels/vue.svg';
import { ReactComponent as AngularLabelIcon } from '../../../assets/labels/angular.svg';
import { ReactComponent as JavaScriptLabelIcon } from '../../../assets/labels/javascript.svg';

interface Props {
  labels: Label[]
}

type LabelSvgMap = Record<Label, React.ReactNode>

// local helpers
const getLabelSvg = (label: Label) => {
  const LABEL_SVG_MAP: LabelSvgMap = {
    react: <ReactLabelIcon />,
    vue: <VueLabelIcon />,
    angular: <AngularLabelIcon />,
    javascript: <JavaScriptLabelIcon />
  };

  return LABEL_SVG_MAP[label];
};


const ProjectLabel = ({ labels }: Props) => {
  return <ul className={s.labels}>
    {labels.map((label, index) => <li key={index}>{getLabelSvg(label)}</li>)}
  </ul>
};

export default ProjectLabel;
