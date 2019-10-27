import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import { object } from 'prop-types';

export default function () {
    'use strict'

    // $('[data-toggle="tooltip"]').tooltip()

    // chat sidebar body scrollbar
    new PerfectScrollbar('.chat-sidebar-body', {
        suppressScrollX: true
    });

    // chat content body scrollbar
    new PerfectScrollbar('.chat-content-body', {
        suppressScrollX: true
    });

    // chat sidebar right scrollbar
    // new PerfectScrollbar('.chat-sidebar-right', {
    //     suppressScrollX: true
    // });


    ///// UI INTERACTION /////

    // channel click
    $('#allChannels div').on('click', function (e) {
        e.preventDefault()
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('#chatDirectMsg .active').removeClass('active');

        // // replace channel title
        var href = $(this).attr('href');
        $('#channelTitle').text(href);

        // view channel title
        $('#channelTitle').removeClass('d-none');
        $('#directTitle').addClass('d-none');

        // view channel nav icon
        $('#channelNav').removeClass('d-none');
        $('#directNav').addClass('d-none');

        if (window.matchMedia('(max-width: 991px)').matches) {
            showChatContent();
        }
    })

    // direct message click
    $('#chatDirectMsg .media').on('click', function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('#allChannels .active').removeClass('active');

        // var directUser = $(this).find('h6').text();
        // $('#directTitle h6').text('@' + directUser);

        // var avatar = $(this).find('.avatar');
        // $('#directTitle .avatar').replaceWith(avatar.clone());

        // view direct title
        $('#channelTitle').addClass('d-none');
        $('#directTitle').removeClass('d-none');

        // view direct nav icon
        $('#channelNav').addClass('d-none');
        $('#directNav').removeClass('d-none');

        if (window.matchMedia('(max-width: 991px)').matches) {
            showChatContent();
        }

        $('body').removeClass('show-sidebar-right');
        $('#showMemberList').removeClass('active');

    })

    function showChatContent() {
        $('#mainMenuOpen').addClass('d-none');
        $('#mailSidebar').removeClass('d-none');

        $('body').addClass('app-chat chat-content-show');
    }

    function hideChatContent() {
        $('#mailSidebar').addClass('d-none');
        $('#mainMenuOpen').removeClass('d-none');

        $('body').removeClass('app-chat chat-content-show');
    }

    $('#showMemberList').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $('body').toggleClass('show-sidebar-right');
    })

    $('#mailSidebar').on('click', function (e) {
        e.preventDefault()
        hideChatContent();
    })

    // making sure navleft and sidebar are display when resizing to desktop
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('.chat-navleft').removeClass('d-none');
            $('.chat-sidebar').removeClass('d-none');
        }
    })



$(function(){
    console.log(typeof document.getElementById('mentionTextarea') == object);
    if(typeof document.getElementById('mentionTextarea') === object){
     document.getElementById('mentionTextarea').addEventListener("keydown", function (e) {
         alert('asd');
     });
    }//*/
// document.getElementById('mentionTextarea').mouseover(function(){
// alert('tes');
// });
});

}