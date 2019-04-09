//auth

export const LOG_OUT = 'log_out';
export const LOG_OUT_SUCCESS = 'log_out_sucess';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

//myInfo

export const FETCH_MY_INFO = 'init_my_info'; /*앱시작시 파이어배이스 토큰참조*/
export const FETCH_MY_INFO_SUCCESS = 'FETCH_MY_INFO_SUCCESS';
export const FETCH_MY_INFO_FAILURE = 'FETCH_MY_INFO_FAILURE';

export const UPDATE_NAME = 'update_name';
export const UPDATE_THUMBNAIL = 'update_thumbnail';
export const UPDATE_BIO = 'update_bio';
export const UPDATE_WRONG_COUNT = 'update_wrong_count';
export const UPDATE_PRINCIPAL = 'udpate_principal';
export const UPDATE_SENDCOUNT = 'update_sendCount';
export const UPDATE_KYCSTATE = 'update_kycState';

//chat
export const LOAD_MESSAGES = 'load_messages';
export const LOAD_MORE_MESSAGES = 'load_more_messages';
export const DELETED_MESSAGE = 'deleted_message';
export const WITHDRAW_MESSAGE = 'WITHDRAW_MESSAGE';
export const DELETE_MESSAGE_RESPONSE = 'deleted_message_response';
export const UNSUBSCRIBE = 'unsubscribe';
export const ALL_MESSAGES_LOADED = 'all_messages_loaded';

//chatRoom
export const INIT_CHAT_ROOMS = 'init_chat_rooms';
export const ADD_CHAT_ROOMS = 'add_chat_rooms';
export const LISTEN_CHAT_ROOMS = 'LISTEN_CHAT_ROOMS';
export const UPDATE_CHATTING_ROOM = 'update chatting room';
export const LEAVE_CHAT_ROOMS = 'leave_chat_rooms';
export const ENTER_CHAT_ROOM = 'enter_chat_room';
export const RECEIVE_LAST_MESSAGE = 'receive_last_message';
export const UPDATE_MEMBER_INFO = 'update_member_info';
export const DECRYPTED_LAST_MESSAGE = 'decrypted_last_message';
export const CLEAR_CHAT_ROOMS = 'clear_chat_rooms';
export const UPDATE_LAST_MESSAGE = 'update_last_message';
export const UPDATE_UNREADCOUNT = 'update_unreadcount';

//home
export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';


//friends request
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';
export const CLEAR_REQUESTS_INFO = 'clear_requests_info';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_REQUEST_SUCCESS = 'REMOVE_REQUEST_SUCCESS';
export const ACCEPT_REQUEST = 'ACCEPT_REQUEST';
export const ACCEPT_REQUEST_SUCCESS = 'ACCEPT_REQUEST_SUCCESS';
export const UPDATED_FRIEND = 'updated_friend';

//noti

export const RECEIVED_NOTIFICATION = 'received_notification';

//network

export const INIT_NETWORK_CONNECTION = 'init_network_connection';
export const CHANGED_NETWORK_CONNECTION = 'changed_network_connection';

export const ADD_FRIENDS_FETCH = 'add_friends_fetch';

//private key
export const SET_PRIVATE_KEY = 'set_private_key';

//error

export const ERROR_OCCUR = 'error_occur';
export const PENDING = 'pending';


// asset
export const FETCH_BALANCE = 'fetch_asset_balance';
export const FETCH_TICKER = 'fetch_asset_ticker';
export const FETCH_TX_DETAILS = 'fetch_tx_details';
export const FETCH_TX_HISTORY = 'fetch_tx_history';
export const FETCH_BALANCE_RESULT = 'fetch_asset_balance_result';
export const FETCH_TICKER_RESULT = 'fetch_asset_ticker_result';
export const FETCH_TX_DETAILS_RESULT = 'fetch_tx_details_result';
export const FETCH_TX_HISTORY_RESULT = 'fetch_tx_history_result';

