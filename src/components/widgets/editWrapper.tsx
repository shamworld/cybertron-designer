import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { getCurrentElement } from '@/store/atorms/global';
import styles from './index.less';

const EditWrapper = (props) => {
    const [currentElement, setCurrentElement] = useRecoilState(getCurrentElement);    
    const onItemClick = () => {
        setCurrentElement(props.id);
    };
    return (
        <div
            className={classNames(
                styles['edit-wrapper'],
                currentElement === props.id ? styles['active'] : '',
            )}
            onClick={onItemClick}
        >
            {props.children}
        </div>
    );
};

EditWrapper.defaultProps = {
    id: PropTypes.string,
};

export default EditWrapper;
