import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon } from '@deriv/components';
import 'Sass/app/modules/account-types.scss';

const MainCard = ({ button_text, buttonOnClick, platforms, is_button_disabled, items, subtitle, title }) => {
    return (
        <div className='account-card__main'>
            <h3 className='account-card__main-title'>{title}</h3>
            <h4 className='account-card__main-subtitle'>{subtitle}</h4>
            {Object.keys(items).length && (
                <div className='account-card__main-table-container'>
                    <table className='account-card__main-items'>
                        <tbody>
                            {Object.entries(items).map(([label, value], index) => {
                                return (
                                    <tr key={index} className='account-card__main-item'>
                                        <td className='account-card__main-item-label'>{label}</td>
                                        <td className='account-card__main-item-value'>{value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            {platforms && (
                <div className='account-card__platforms'>
                    <p className='account-card__platforms-title'>Available on</p>
                    <div className='account-card__platforms-icons'>
                        {platforms.map((platform, index) => {
                            return (
                                <div key={index} className='account-card__platforms-icon'>
                                    <a href={platform.path} target='_blank' rel='noopener noreferrer'>
                                        <Icon icon={platform.icon} size={24} />
                                    </a>

                                    <p className='account-card__platforms-name'>{platform.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <Button
                className='account-card__main-button'
                text={button_text}
                is_disabled={is_button_disabled}
                onClick={buttonOnClick}
                has_effect
                primary
            />
        </div>
    );
};

const AccountCard = ({ button_text, buttonOnClick, items, platforms, subtitle, title, is_button_disabled }) => {
    return (
        <div className='account-card'>
            <div className={classNames('account-card__wrapper')}>
                <MainCard
                    items={items}
                    subtitle={subtitle}
                    title={title}
                    is_button_disabled={is_button_disabled}
                    platforms={platforms}
                    button_text={button_text}
                    buttonOnClick={buttonOnClick}
                />
            </div>
        </div>
    );
};

AccountCard.propTypes = {
    button_text: PropTypes.string,
    buttonOnClick: PropTypes.func,
    items: PropTypes.object,
    platforms: PropTypes.arrayOf(PropTypes.object),
    subtitle: PropTypes.string,
    title: PropTypes.string,
};

export default AccountCard;
