'use client';

import { type ReactElement, useState } from 'react';

import * as S from './styles';

import { ISelectLenguageProps, IIdioma } from './interfaces';
import { Button, IButtonProps } from '@/components/molecules/button';

const SelectLenguage = ({ onSelect }: ISelectLenguageProps): ReactElement => {
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState<IIdioma>('PT_BR');

    const mapperIcon: { [key in IIdioma]: IButtonProps['iconLeftName'] } = {
        PT_BR: 'FLAG_BR',
        EN_US: 'FLAG_US',
    };

    const handleSelect = (value: IIdioma) => {
        setSelected(value);
        setToggle(false);
        onSelect && onSelect(value);
    };
    return (
        <S.Container>
            <Button
                format="NONE_ACCENTED"
                iconLeftName={mapperIcon[selected]}
                onPress={() => setToggle((curr) => !curr)}
            />
            {toggle && (
                <S.SelectFlag>
                    <Button
                        format="NONE_ACCENTED"
                        iconLeftName="FLAG_BR"
                        onPress={() => handleSelect('PT_BR')}
                    />
                    <Button
                        format="NONE_ACCENTED"
                        iconLeftName="FLAG_US"
                        onPress={() => handleSelect('EN_US')}
                    />
                </S.SelectFlag>
            )}
        </S.Container>
    );
};

export default SelectLenguage;