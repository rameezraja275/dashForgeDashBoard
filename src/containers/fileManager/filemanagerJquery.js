import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import feather from 'feather-icons';

export default function(){
    'use strict'
  
    new PerfectScrollbar('.filemgr-sidebar-body', {
      suppressScrollX: true
    });
  
    new PerfectScrollbar('.filemgr-content-body', {
      suppressScrollX: true
    });

    if (window.matchMedia('(max-width: 991px)').matches) {
      $('#mainMenuOpen').addClass('d-none');
      $('#mailSidebar').removeClass('d-none');

      // $('body').addClass('filemgr-sidebar-show');
    }
  
    $('.aside-menu-link').on('click', function(e){
      e.preventDefault();
      if (window.matchMedia('(max-width: 991px)').matches) {
      $('#mainMenuOpen').addClass('d-none');
      $('#mailSidebar').removeClass('d-none');
      }
    });

    $('#mailSidebar').on('click', function(e){
      e.preventDefault();
  
      $('body').addClass('app-filemgr filemgr-sidebar-show');
  
      $(this).addClass('d-none');
      $('#mainMenuOpen').removeClass('d-none');
    });
  
    $(document).on('click touchstart', function(e){
      e.stopPropagation();
  
      // closing of sidebar menu when clicking outside of it
      if(!$(e.target).closest('.burger-menu').length) {
        var sb = $(e.target).closest('.filemgr-sidebar').length;
        if(!sb) {
          $('body').removeClass('filemgr-sidebar-show');
  
          $('#filemgrMenu').removeClass('d-none');
          $('#mainMenuOpen').addClass('d-none');
        }
      }
    });
  
  
    $('.important').on('click', function(e){
      e.preventDefault();
  
      var parent = $(this).closest('.card-file');
      var important = parent.find('.marker-icon');
  
      if(!important.length) {
        $(this).closest('.card-file').append('<div class="marker-icon marker-warning pos-absolute t--1 l--1"><i data-feather="star"></i></div>');
  
        $(this).html('<i data-feather="star"></i> Unmark as Important');
  
      } else {
        important.remove();
  
        $(this).html('<i data-feather="star"></i> Mark as Important');
      }
  
      feather.replace();
    })
  
    $('.download').on('click', function(e){
      e.preventDefault();
  
      $('#toast').toast('show');
    })
  
  }