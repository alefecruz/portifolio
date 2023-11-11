'use client';

import { type ReactElement } from 'react';

import * as S from './styles';

import { IDefaultProps } from './interfaces';

import { Text } from '@/components/atoms/text';
import { Logo } from '@/components/molecules/logo';
import { Button } from '@/components/molecules/button';
import { Navbar } from '@/components/organisms/navbar';
import { Image } from '@/components/atoms/image';
import { SectionTitle } from '@/components/molecules/section-title';

const Default = ({
    myInfo,
    aboutSection,
    experienceSection,
    projectSection,
}: IDefaultProps): ReactElement => {
    const {
        logo,
        description,
        getInTouchButton,
        navbarOptionList = [],
        socialButtonList,
        subtitle,
        title,
    } = myInfo || {};

    const {
        title: logoTitle,
        iconName: iconLogoName,
        description: logoDescription,
    } = logo || {};

    const { label, onPress } = getInTouchButton || {};

    const { myPicture, aboutTitle, aboutRef } = aboutSection || {};
    const { experienceRef, experienceTitle } = experienceSection || {};
    const { projectRef, projectTitle } = projectSection || {};

    return (
        <S.Container>
            <S.ContentMyInfo>
                {logoTitle && iconLogoName && logoDescription && (
                    <Logo
                        iconName={iconLogoName}
                        title={logoTitle}
                        description={logoDescription}
                    />
                )}
                <S.WrapperMyInfo>
                    <Text format="TITLE_2" color="ACCENTED">
                        {title}
                    </Text>
                    <Text format="BODY" color="LIGHT">
                        {subtitle}
                    </Text>
                    <Text format="DESCRIPTION" color="LIGHT">
                        {description}
                    </Text>
                    <S.ContentSocialMedias>
                        {socialButtonList.map(
                            ({ onPress, iconLeftName }, index) => (
                                <Button
                                    key={index}
                                    iconLeftName={iconLeftName}
                                    format="NONE_ACCENTED"
                                    onPress={onPress}
                                />
                            ),
                        )}
                    </S.ContentSocialMedias>
                </S.WrapperMyInfo>
                <Navbar
                    optionList={navbarOptionList}
                    optionSelectedColor="ACCENTED"
                    optionDontSelectedColor="LIGHT"
                />
                <Button
                    label={label}
                    onPress={onPress}
                    format="FILLED_ACCENTED"
                    iconLeftName="SETA"
                />
            </S.ContentMyInfo>
            <S.ContentAbout id="about" ref={aboutRef}>
                <SectionTitle title={aboutTitle} />

                <Image
                    source={myPicture.source}
                    alt={myPicture.alt}
                    sizeHeight={47}
                    sizeWidth={47}
                />
            </S.ContentAbout>
            <S.ContentExperience id="experience" ref={experienceRef}>
                <SectionTitle title={experienceTitle} />
            </S.ContentExperience>
            <S.ContentProject id="project" ref={projectRef}>
                <SectionTitle title={projectTitle} />
            </S.ContentProject>
        </S.Container>
    );
};

export default Default;
