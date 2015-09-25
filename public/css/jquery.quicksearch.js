


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>quicksearch/jquery.quicksearch.js at master · DeuxHuitHuit/quicksearch</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="DeuxHuitHuit/quicksearch" name="twitter:title" /><meta content="quicksearch - A jQuery plugin for searching through DOM Elements quickly" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/1457832?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/1457832?v=3&amp;s=400" property="og:image" /><meta content="DeuxHuitHuit/quicksearch" property="og:title" /><meta content="https://github.com/DeuxHuitHuit/quicksearch" property="og:url" /><meta content="quicksearch - A jQuery plugin for searching through DOM Elements quickly" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTA0OTE3MTc6ZTQwMmJhNDljNDFlZmRiZjJhZDUzOGQyY2JmOWJiMTQ6NDcxYWE0ZWYwYTE2YjIyZjM0ZDU4NzY4MjExMmJkNGEyMDRkMDcxNWJjNGNiYzc2N2U4YjMzYjNiYmIyNGIyOQ==--ee19f2c31671006f2183e2f92fc91dc0fd39c43a">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D2E36FC3:108B:261E97A:5604FBA5" name="octolytics-dimension-request_id" /><meta content="10491717" name="octolytics-actor-id" /><meta content="5843435" name="octolytics-actor-login" /><meta content="8024662cb7316a7045a6ffe180cadccf8cfc1a6d5655dd1e5d74ad147d930ae0" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="5843435">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="y6b0D66xbEKcpCRnfGAiC+MVho39dYaFgauv4xuw2BuOkfFAzctnnptXCS6C8sVJnQyTJNEH6Ab+OEcDNkjaoA==" name="csrf-token" />
    <meta content="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-b61ad460eedae0282c8a42d93a8d34b48981d45af9534d1133f99f50e58d4876.css" integrity="sha256-thrUYO7a4CgsikLZOo00tImB1Fr5U00RM/mfUOWNSHY=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-744f5321e4f9e57f30a98b913c14585e1814078c39f010c420542ac3fb979053.css" integrity="sha256-dE9TIeT55X8wqYuRPBRYXhgUB4w58BDEIFQqw/uXkFM=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="328152ed49fb262668ac4e5b38e22f3f">

      
  <meta name="description" content="quicksearch - A jQuery plugin for searching through DOM Elements quickly">
  <meta name="go-import" content="github.com/DeuxHuitHuit/quicksearch git https://github.com/DeuxHuitHuit/quicksearch.git">

  <meta content="1457832" name="octolytics-dimension-user_id" /><meta content="DeuxHuitHuit" name="octolytics-dimension-user_login" /><meta content="14022502" name="octolytics-dimension-repository_id" /><meta content="DeuxHuitHuit/quicksearch" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14022502" name="octolytics-dimension-repository_network_root_id" /><meta content="DeuxHuitHuit/quicksearch" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/DeuxHuitHuit/quicksearch/commits/master.atom" rel="alternate" title="Recent Commits to quicksearch:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/DeuxHuitHuit/quicksearch/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/DeuxHuitHuit/quicksearch/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:5843435"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="DeuxHuitHuit/quicksearch">This repository</span>
  </div>
    <a class="dropdown-item" href="/DeuxHuitHuit/quicksearch/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/5843435"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@5843435" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/10491717?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">5843435</strong>

        </div>



        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/5843435" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="n8T5S1b1OpQVirCqTCS/HvvDAfZl4J5rYCZpA/avywggqNLJiAQJBBVYtGeQZyPiPQ5qE1cPjoqas/87s564YQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s0yTXOvzYpgA+L4HjrcHgDyvgCNs5nn4bjQ6F8mQ3wXpW2r7ooqL9m64wnyufgp9+Q2NLBXIi4GAJf5NbkY3cw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="14022502" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/DeuxHuitHuit/quicksearch/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/DeuxHuitHuit/quicksearch/watchers">
          11
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/DeuxHuitHuit/quicksearch/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JWC34CW/UXXztDoRDiREKSdvc7oeOgcUUDZexeHs0Wh1jhi0vRq0yN+JQgVsKzDrd6MqVRUB6r6aT+LFgczfkQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar DeuxHuitHuit/quicksearch"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/DeuxHuitHuit/quicksearch/stargazers">
          56
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/DeuxHuitHuit/quicksearch/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="a3Z3mj0F+Uk/nzYEkmQmCZm7kXFyGt1swJwPOxGQ8PPp1Fa2NZRLRzQMt5BxPNLLjFSqdo/mOnIkPPWVVJkFfw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star DeuxHuitHuit/quicksearch"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/DeuxHuitHuit/quicksearch/stargazers">
          56
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of DeuxHuitHuit/quicksearch to your account"
              aria-label="Fork your own copy of DeuxHuitHuit/quicksearch to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/DeuxHuitHuit/quicksearch/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/DeuxHuitHuit/quicksearch/network" class="social-count">
      10
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/DeuxHuitHuit" class="url fn" itemprop="url" rel="author"><span itemprop="title">DeuxHuitHuit</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/DeuxHuitHuit/quicksearch" data-pjax="#js-repo-pjax-container">quicksearch</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/DeuxHuitHuit/quicksearch/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/DeuxHuitHuit/quicksearch" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /DeuxHuitHuit/quicksearch">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/DeuxHuitHuit/quicksearch/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /DeuxHuitHuit/quicksearch/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/DeuxHuitHuit/quicksearch/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /DeuxHuitHuit/quicksearch/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/DeuxHuitHuit/quicksearch/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /DeuxHuitHuit/quicksearch/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/DeuxHuitHuit/quicksearch/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /DeuxHuitHuit/quicksearch/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/DeuxHuitHuit/quicksearch/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /DeuxHuitHuit/quicksearch/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/DeuxHuitHuit/quicksearch.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:DeuxHuitHuit/quicksearch.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/DeuxHuitHuit/quicksearch" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VColbb90m4nVl71TEHedEyB5b1v3QqEd9S2MHgcjLIKySDg8Ys03eDItmKtJ40boB8Qe9UGGFUg2FbWBif70ng==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NFNjvoABMjXyrpKF1UAEeJqPRn5CWfxS1+tDye1kkGXGtRK6b+fMv0/bF0M3Iw+tFAgaCAPzbjlAedFlnnVtEA==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NUmB0Y5uMThqF1If1KkPdfOFoLoVvQ4scmvuEv0kKolfB6nTdO2V52duzsj30O7DZAgMZgkPr0uPoNIU6JWWiw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="github-windows://openRepo/https://github.com/DeuxHuitHuit/quicksearch" class="btn btn-sm sidebar-button" title="Save DeuxHuitHuit/quicksearch to your computer and use it in GitHub Desktop." aria-label="Save DeuxHuitHuit/quicksearch to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/DeuxHuitHuit/quicksearch/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of DeuxHuitHuit/quicksearch as a zip file"
                 title="Download the contents of DeuxHuitHuit/quicksearch as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/DeuxHuitHuit/quicksearch/blob/e5b738899b6f2f99b5083179ef5f02e66d75dc6e/src/jquery.quicksearch.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:def61293f6188b6a2a28b59f017115d9 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DeuxHuitHuit/quicksearch/blob/dev/src/jquery.quicksearch.js"
               data-name="dev"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev">
                dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DeuxHuitHuit/quicksearch/blob/gh-pages/src/jquery.quicksearch.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/DeuxHuitHuit/quicksearch/blob/master/src/jquery.quicksearch.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.5/src/jquery.quicksearch.js"
                 data-name="2.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.5">2.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.4/src/jquery.quicksearch.js"
                 data-name="2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.4">2.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.3/src/jquery.quicksearch.js"
                 data-name="2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.3">2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.2/src/jquery.quicksearch.js"
                 data-name="2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.2">2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.1/src/jquery.quicksearch.js"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DeuxHuitHuit/quicksearch/tree/2.0.0/src/jquery.quicksearch.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/DeuxHuitHuit/quicksearch/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DeuxHuitHuit/quicksearch" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">quicksearch</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DeuxHuitHuit/quicksearch/tree/master/src" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><strong class="final-path">jquery.quicksearch.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@nitriques" class="avatar" height="24" src="https://avatars3.githubusercontent.com/u/771169?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/nitriques" rel="contributor">nitriques</a></span>
        <time datetime="2014-08-26T17:44:29Z" is="relative-time">Aug 26, 2014</time>
        <div class="commit-title">
            <a href="/DeuxHuitHuit/quicksearch/commit/78b1f75f0e350c63be593b0414d63f879eee7b5f" class="message" data-pjax="true" title="Replace tags with space instead of nothing

This prevent merging data across html element.
Closes #9.">Replace tags with space instead of nothing</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="nitriques" href="/DeuxHuitHuit/quicksearch/commits/master/src/jquery.quicksearch.js?author=nitriques"><img alt="@nitriques" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/771169?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cntoplolicon" href="/DeuxHuitHuit/quicksearch/commits/master/src/jquery.quicksearch.js?author=cntoplolicon"><img alt="@cntoplolicon" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3337209?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="beaubbe" href="/DeuxHuitHuit/quicksearch/commits/master/src/jquery.quicksearch.js?author=beaubbe"><img alt="@beaubbe" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2184547?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@nitriques" height="24" src="https://avatars3.githubusercontent.com/u/771169?v=3&amp;s=48" width="24" />
            <a href="/nitriques">nitriques</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cntoplolicon" height="24" src="https://avatars0.githubusercontent.com/u/3337209?v=3&amp;s=48" width="24" />
            <a href="/cntoplolicon">cntoplolicon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@beaubbe" height="24" src="https://avatars1.githubusercontent.com/u/2184547?v=3&amp;s=48" width="24" />
            <a href="/beaubbe">beaubbe</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/DeuxHuitHuit/quicksearch/raw/master/src/jquery.quicksearch.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/DeuxHuitHuit/quicksearch/blame/master/src/jquery.quicksearch.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/DeuxHuitHuit/quicksearch/commits/master/src/jquery.quicksearch.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

      <a class="octicon-btn tooltipped tooltipped-nw"
         href="github-windows://openRepo/https://github.com/DeuxHuitHuit/quicksearch?branch=master&amp;filepath=src%2Fjquery.quicksearch.js"
         aria-label="Open this file in GitHub Desktop"
         data-ga-click="Repository, open with desktop, type:windows">
          <span class="octicon octicon-device-desktop"></span>
      </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/DeuxHuitHuit/quicksearch/edit/master/src/jquery.quicksearch.js" class="inline-form js-update-url-with-hash" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0wE7ZdZsPKgX8hrXLVaMeOAbRYv/Upt4FBmOXKef0QUunq5kQWDirIbkAGaYaqoT1Xn4VZbuSeWm9N0OIz0Wdw==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/DeuxHuitHuit/quicksearch/delete/master/src/jquery.quicksearch.js" class="inline-form" data-form-nonce="a9fd6ee87381504fb61a6c0178684f6610a3f7d0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="91voyitpqtSCXNoTYEvBWIdMt1514E6pq3yGMsRKGzYgIOSIiFrrWwKBOTPZ3ocnzwulBoEWvLZNFK7ecxmHvQ==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      325 lines (282 sloc)
      <span class="file-info-divider"></span>
    13.5 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! jQuery-QuickSearch - v2.0.2 - 2013-11-15</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Copyright (c) 2013 Deux Huit Huit (http://deuxhuithuit.com/);</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Licensed MIT http://deuxhuithuit.mit-license.org */</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyrights: Deux Huit Huit, Rik Lomas.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed MIT: http://deuxhuithuit.mit-license.org</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-smi">window</span>, <span class="pl-smi">document</span>, <span class="pl-smi">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">	$.quicksearch <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		defaults<span class="pl-k">:</span> { </td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">			delay<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">			selector<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">			stripeRows<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">			loader<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">			noResults<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">			matchedResultsCount<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">			bind<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>keyup search input<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">			removeDiacritics<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">			minValLength<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">			onBefore<span class="pl-k">:</span> $.noop,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">			onAfter<span class="pl-k">:</span> $.noop,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">			onValTooSmall<span class="pl-k">:</span> $.noop,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">show</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">				$(<span class="pl-v">this</span>).show();</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">hide</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">				$(<span class="pl-v">this</span>).hide();</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">prepareQuery</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> val.<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">testQuery</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">query</span>, <span class="pl-smi">txt</span>, <span class="pl-smi">_row</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> query.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (txt.<span class="pl-c1">indexOf</span>(query[i]) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">		diacriticsRemovalMap<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0041<span class="pl-cce">\u</span>24B6<span class="pl-cce">\u</span>FF21<span class="pl-cce">\u</span>00C0<span class="pl-cce">\u</span>00C1<span class="pl-cce">\u</span>00C2<span class="pl-cce">\u</span>1EA6<span class="pl-cce">\u</span>1EA4<span class="pl-cce">\u</span>1EAA<span class="pl-cce">\u</span>1EA8<span class="pl-cce">\u</span>00C3<span class="pl-cce">\u</span>0100<span class="pl-cce">\u</span>0102<span class="pl-cce">\u</span>1EB0<span class="pl-cce">\u</span>1EAE<span class="pl-cce">\u</span>1EB4<span class="pl-cce">\u</span>1EB2<span class="pl-cce">\u</span>0226<span class="pl-cce">\u</span>01E0<span class="pl-cce">\u</span>00C4<span class="pl-cce">\u</span>01DE<span class="pl-cce">\u</span>1EA2<span class="pl-cce">\u</span>00C5<span class="pl-cce">\u</span>01FA<span class="pl-cce">\u</span>01CD<span class="pl-cce">\u</span>0200<span class="pl-cce">\u</span>0202<span class="pl-cce">\u</span>1EA0<span class="pl-cce">\u</span>1EAC<span class="pl-cce">\u</span>1EB6<span class="pl-cce">\u</span>1E00<span class="pl-cce">\u</span>0104<span class="pl-cce">\u</span>023A<span class="pl-cce">\u</span>2C6F]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AA<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A732]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AE<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>00C6<span class="pl-cce">\u</span>01FC<span class="pl-cce">\u</span>01E2]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AO<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A734]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AU<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A736]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AV<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A738<span class="pl-cce">\u</span>A73A]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>AY<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A73C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>B<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0042<span class="pl-cce">\u</span>24B7<span class="pl-cce">\u</span>FF22<span class="pl-cce">\u</span>1E02<span class="pl-cce">\u</span>1E04<span class="pl-cce">\u</span>1E06<span class="pl-cce">\u</span>0243<span class="pl-cce">\u</span>0182<span class="pl-cce">\u</span>0181]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0043<span class="pl-cce">\u</span>24B8<span class="pl-cce">\u</span>FF23<span class="pl-cce">\u</span>0106<span class="pl-cce">\u</span>0108<span class="pl-cce">\u</span>010A<span class="pl-cce">\u</span>010C<span class="pl-cce">\u</span>00C7<span class="pl-cce">\u</span>1E08<span class="pl-cce">\u</span>0187<span class="pl-cce">\u</span>023B<span class="pl-cce">\u</span>A73E]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0044<span class="pl-cce">\u</span>24B9<span class="pl-cce">\u</span>FF24<span class="pl-cce">\u</span>1E0A<span class="pl-cce">\u</span>010E<span class="pl-cce">\u</span>1E0C<span class="pl-cce">\u</span>1E10<span class="pl-cce">\u</span>1E12<span class="pl-cce">\u</span>1E0E<span class="pl-cce">\u</span>0110<span class="pl-cce">\u</span>018B<span class="pl-cce">\u</span>018A<span class="pl-cce">\u</span>0189<span class="pl-cce">\u</span>A779]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>DZ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01F1<span class="pl-cce">\u</span>01C4]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Dz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01F2<span class="pl-cce">\u</span>01C5]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>E<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0045<span class="pl-cce">\u</span>24BA<span class="pl-cce">\u</span>FF25<span class="pl-cce">\u</span>00C8<span class="pl-cce">\u</span>00C9<span class="pl-cce">\u</span>00CA<span class="pl-cce">\u</span>1EC0<span class="pl-cce">\u</span>1EBE<span class="pl-cce">\u</span>1EC4<span class="pl-cce">\u</span>1EC2<span class="pl-cce">\u</span>1EBC<span class="pl-cce">\u</span>0112<span class="pl-cce">\u</span>1E14<span class="pl-cce">\u</span>1E16<span class="pl-cce">\u</span>0114<span class="pl-cce">\u</span>0116<span class="pl-cce">\u</span>00CB<span class="pl-cce">\u</span>1EBA<span class="pl-cce">\u</span>011A<span class="pl-cce">\u</span>0204<span class="pl-cce">\u</span>0206<span class="pl-cce">\u</span>1EB8<span class="pl-cce">\u</span>1EC6<span class="pl-cce">\u</span>0228<span class="pl-cce">\u</span>1E1C<span class="pl-cce">\u</span>0118<span class="pl-cce">\u</span>1E18<span class="pl-cce">\u</span>1E1A<span class="pl-cce">\u</span>0190<span class="pl-cce">\u</span>018E]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>F<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0046<span class="pl-cce">\u</span>24BB<span class="pl-cce">\u</span>FF26<span class="pl-cce">\u</span>1E1E<span class="pl-cce">\u</span>0191<span class="pl-cce">\u</span>A77B]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>G<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0047<span class="pl-cce">\u</span>24BC<span class="pl-cce">\u</span>FF27<span class="pl-cce">\u</span>01F4<span class="pl-cce">\u</span>011C<span class="pl-cce">\u</span>1E20<span class="pl-cce">\u</span>011E<span class="pl-cce">\u</span>0120<span class="pl-cce">\u</span>01E6<span class="pl-cce">\u</span>0122<span class="pl-cce">\u</span>01E4<span class="pl-cce">\u</span>0193<span class="pl-cce">\u</span>A7A0<span class="pl-cce">\u</span>A77D<span class="pl-cce">\u</span>A77E]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>H<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0048<span class="pl-cce">\u</span>24BD<span class="pl-cce">\u</span>FF28<span class="pl-cce">\u</span>0124<span class="pl-cce">\u</span>1E22<span class="pl-cce">\u</span>1E26<span class="pl-cce">\u</span>021E<span class="pl-cce">\u</span>1E24<span class="pl-cce">\u</span>1E28<span class="pl-cce">\u</span>1E2A<span class="pl-cce">\u</span>0126<span class="pl-cce">\u</span>2C67<span class="pl-cce">\u</span>2C75<span class="pl-cce">\u</span>A78D]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>I<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0049<span class="pl-cce">\u</span>24BE<span class="pl-cce">\u</span>FF29<span class="pl-cce">\u</span>00CC<span class="pl-cce">\u</span>00CD<span class="pl-cce">\u</span>00CE<span class="pl-cce">\u</span>0128<span class="pl-cce">\u</span>012A<span class="pl-cce">\u</span>012C<span class="pl-cce">\u</span>0130<span class="pl-cce">\u</span>00CF<span class="pl-cce">\u</span>1E2E<span class="pl-cce">\u</span>1EC8<span class="pl-cce">\u</span>01CF<span class="pl-cce">\u</span>0208<span class="pl-cce">\u</span>020A<span class="pl-cce">\u</span>1ECA<span class="pl-cce">\u</span>012E<span class="pl-cce">\u</span>1E2C<span class="pl-cce">\u</span>0197]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>J<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004A<span class="pl-cce">\u</span>24BF<span class="pl-cce">\u</span>FF2A<span class="pl-cce">\u</span>0134<span class="pl-cce">\u</span>0248]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>K<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004B<span class="pl-cce">\u</span>24C0<span class="pl-cce">\u</span>FF2B<span class="pl-cce">\u</span>1E30<span class="pl-cce">\u</span>01E8<span class="pl-cce">\u</span>1E32<span class="pl-cce">\u</span>0136<span class="pl-cce">\u</span>1E34<span class="pl-cce">\u</span>0198<span class="pl-cce">\u</span>2C69<span class="pl-cce">\u</span>A740<span class="pl-cce">\u</span>A742<span class="pl-cce">\u</span>A744<span class="pl-cce">\u</span>A7A2]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>L<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004C<span class="pl-cce">\u</span>24C1<span class="pl-cce">\u</span>FF2C<span class="pl-cce">\u</span>013F<span class="pl-cce">\u</span>0139<span class="pl-cce">\u</span>013D<span class="pl-cce">\u</span>1E36<span class="pl-cce">\u</span>1E38<span class="pl-cce">\u</span>013B<span class="pl-cce">\u</span>1E3C<span class="pl-cce">\u</span>1E3A<span class="pl-cce">\u</span>0141<span class="pl-cce">\u</span>023D<span class="pl-cce">\u</span>2C62<span class="pl-cce">\u</span>2C60<span class="pl-cce">\u</span>A748<span class="pl-cce">\u</span>A746<span class="pl-cce">\u</span>A780]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>LJ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01C7]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Lj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01C8]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004D<span class="pl-cce">\u</span>24C2<span class="pl-cce">\u</span>FF2D<span class="pl-cce">\u</span>1E3E<span class="pl-cce">\u</span>1E40<span class="pl-cce">\u</span>1E42<span class="pl-cce">\u</span>2C6E<span class="pl-cce">\u</span>019C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>N<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004E<span class="pl-cce">\u</span>24C3<span class="pl-cce">\u</span>FF2E<span class="pl-cce">\u</span>01F8<span class="pl-cce">\u</span>0143<span class="pl-cce">\u</span>00D1<span class="pl-cce">\u</span>1E44<span class="pl-cce">\u</span>0147<span class="pl-cce">\u</span>1E46<span class="pl-cce">\u</span>0145<span class="pl-cce">\u</span>1E4A<span class="pl-cce">\u</span>1E48<span class="pl-cce">\u</span>0220<span class="pl-cce">\u</span>019D<span class="pl-cce">\u</span>A790<span class="pl-cce">\u</span>A7A4]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NJ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01CA]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Nj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01CB]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>O<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>004F<span class="pl-cce">\u</span>24C4<span class="pl-cce">\u</span>FF2F<span class="pl-cce">\u</span>00D2<span class="pl-cce">\u</span>00D3<span class="pl-cce">\u</span>00D4<span class="pl-cce">\u</span>1ED2<span class="pl-cce">\u</span>1ED0<span class="pl-cce">\u</span>1ED6<span class="pl-cce">\u</span>1ED4<span class="pl-cce">\u</span>00D5<span class="pl-cce">\u</span>1E4C<span class="pl-cce">\u</span>022C<span class="pl-cce">\u</span>1E4E<span class="pl-cce">\u</span>014C<span class="pl-cce">\u</span>1E50<span class="pl-cce">\u</span>1E52<span class="pl-cce">\u</span>014E<span class="pl-cce">\u</span>022E<span class="pl-cce">\u</span>0230<span class="pl-cce">\u</span>00D6<span class="pl-cce">\u</span>022A<span class="pl-cce">\u</span>1ECE<span class="pl-cce">\u</span>0150<span class="pl-cce">\u</span>01D1<span class="pl-cce">\u</span>020C<span class="pl-cce">\u</span>020E<span class="pl-cce">\u</span>01A0<span class="pl-cce">\u</span>1EDC<span class="pl-cce">\u</span>1EDA<span class="pl-cce">\u</span>1EE0<span class="pl-cce">\u</span>1EDE<span class="pl-cce">\u</span>1EE2<span class="pl-cce">\u</span>1ECC<span class="pl-cce">\u</span>1ED8<span class="pl-cce">\u</span>01EA<span class="pl-cce">\u</span>01EC<span class="pl-cce">\u</span>00D8<span class="pl-cce">\u</span>01FE<span class="pl-cce">\u</span>0186<span class="pl-cce">\u</span>019F<span class="pl-cce">\u</span>A74A<span class="pl-cce">\u</span>A74C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OI<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01A2]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OO<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A74E]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>OU<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0222]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>P<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0050<span class="pl-cce">\u</span>24C5<span class="pl-cce">\u</span>FF30<span class="pl-cce">\u</span>1E54<span class="pl-cce">\u</span>1E56<span class="pl-cce">\u</span>01A4<span class="pl-cce">\u</span>2C63<span class="pl-cce">\u</span>A750<span class="pl-cce">\u</span>A752<span class="pl-cce">\u</span>A754]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Q<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0051<span class="pl-cce">\u</span>24C6<span class="pl-cce">\u</span>FF31<span class="pl-cce">\u</span>A756<span class="pl-cce">\u</span>A758<span class="pl-cce">\u</span>024A]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>R<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0052<span class="pl-cce">\u</span>24C7<span class="pl-cce">\u</span>FF32<span class="pl-cce">\u</span>0154<span class="pl-cce">\u</span>1E58<span class="pl-cce">\u</span>0158<span class="pl-cce">\u</span>0210<span class="pl-cce">\u</span>0212<span class="pl-cce">\u</span>1E5A<span class="pl-cce">\u</span>1E5C<span class="pl-cce">\u</span>0156<span class="pl-cce">\u</span>1E5E<span class="pl-cce">\u</span>024C<span class="pl-cce">\u</span>2C64<span class="pl-cce">\u</span>A75A<span class="pl-cce">\u</span>A7A6<span class="pl-cce">\u</span>A782]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>S<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0053<span class="pl-cce">\u</span>24C8<span class="pl-cce">\u</span>FF33<span class="pl-cce">\u</span>1E9E<span class="pl-cce">\u</span>015A<span class="pl-cce">\u</span>1E64<span class="pl-cce">\u</span>015C<span class="pl-cce">\u</span>1E60<span class="pl-cce">\u</span>0160<span class="pl-cce">\u</span>1E66<span class="pl-cce">\u</span>1E62<span class="pl-cce">\u</span>1E68<span class="pl-cce">\u</span>0218<span class="pl-cce">\u</span>015E<span class="pl-cce">\u</span>2C7E<span class="pl-cce">\u</span>A7A8<span class="pl-cce">\u</span>A784]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>T<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0054<span class="pl-cce">\u</span>24C9<span class="pl-cce">\u</span>FF34<span class="pl-cce">\u</span>1E6A<span class="pl-cce">\u</span>0164<span class="pl-cce">\u</span>1E6C<span class="pl-cce">\u</span>021A<span class="pl-cce">\u</span>0162<span class="pl-cce">\u</span>1E70<span class="pl-cce">\u</span>1E6E<span class="pl-cce">\u</span>0166<span class="pl-cce">\u</span>01AC<span class="pl-cce">\u</span>01AE<span class="pl-cce">\u</span>023E<span class="pl-cce">\u</span>A786]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>TZ<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A728]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>U<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0055<span class="pl-cce">\u</span>24CA<span class="pl-cce">\u</span>FF35<span class="pl-cce">\u</span>00D9<span class="pl-cce">\u</span>00DA<span class="pl-cce">\u</span>00DB<span class="pl-cce">\u</span>0168<span class="pl-cce">\u</span>1E78<span class="pl-cce">\u</span>016A<span class="pl-cce">\u</span>1E7A<span class="pl-cce">\u</span>016C<span class="pl-cce">\u</span>00DC<span class="pl-cce">\u</span>01DB<span class="pl-cce">\u</span>01D7<span class="pl-cce">\u</span>01D5<span class="pl-cce">\u</span>01D9<span class="pl-cce">\u</span>1EE6<span class="pl-cce">\u</span>016E<span class="pl-cce">\u</span>0170<span class="pl-cce">\u</span>01D3<span class="pl-cce">\u</span>0214<span class="pl-cce">\u</span>0216<span class="pl-cce">\u</span>01AF<span class="pl-cce">\u</span>1EEA<span class="pl-cce">\u</span>1EE8<span class="pl-cce">\u</span>1EEE<span class="pl-cce">\u</span>1EEC<span class="pl-cce">\u</span>1EF0<span class="pl-cce">\u</span>1EE4<span class="pl-cce">\u</span>1E72<span class="pl-cce">\u</span>0172<span class="pl-cce">\u</span>1E76<span class="pl-cce">\u</span>1E74<span class="pl-cce">\u</span>0244]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>V<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0056<span class="pl-cce">\u</span>24CB<span class="pl-cce">\u</span>FF36<span class="pl-cce">\u</span>1E7C<span class="pl-cce">\u</span>1E7E<span class="pl-cce">\u</span>01B2<span class="pl-cce">\u</span>A75E<span class="pl-cce">\u</span>0245]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>VY<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A760]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>W<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0057<span class="pl-cce">\u</span>24CC<span class="pl-cce">\u</span>FF37<span class="pl-cce">\u</span>1E80<span class="pl-cce">\u</span>1E82<span class="pl-cce">\u</span>0174<span class="pl-cce">\u</span>1E86<span class="pl-cce">\u</span>1E84<span class="pl-cce">\u</span>1E88<span class="pl-cce">\u</span>2C72]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>X<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0058<span class="pl-cce">\u</span>24CD<span class="pl-cce">\u</span>FF38<span class="pl-cce">\u</span>1E8A<span class="pl-cce">\u</span>1E8C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Y<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0059<span class="pl-cce">\u</span>24CE<span class="pl-cce">\u</span>FF39<span class="pl-cce">\u</span>1EF2<span class="pl-cce">\u</span>00DD<span class="pl-cce">\u</span>0176<span class="pl-cce">\u</span>1EF8<span class="pl-cce">\u</span>0232<span class="pl-cce">\u</span>1E8E<span class="pl-cce">\u</span>0178<span class="pl-cce">\u</span>1EF6<span class="pl-cce">\u</span>1EF4<span class="pl-cce">\u</span>01B3<span class="pl-cce">\u</span>024E<span class="pl-cce">\u</span>1EFE]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Z<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>005A<span class="pl-cce">\u</span>24CF<span class="pl-cce">\u</span>FF3A<span class="pl-cce">\u</span>0179<span class="pl-cce">\u</span>1E90<span class="pl-cce">\u</span>017B<span class="pl-cce">\u</span>017D<span class="pl-cce">\u</span>1E92<span class="pl-cce">\u</span>1E94<span class="pl-cce">\u</span>01B5<span class="pl-cce">\u</span>0224<span class="pl-cce">\u</span>2C7F<span class="pl-cce">\u</span>2C6B<span class="pl-cce">\u</span>A762]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0061<span class="pl-cce">\u</span>24D0<span class="pl-cce">\u</span>FF41<span class="pl-cce">\u</span>1E9A<span class="pl-cce">\u</span>00E0<span class="pl-cce">\u</span>00E1<span class="pl-cce">\u</span>00E2<span class="pl-cce">\u</span>1EA7<span class="pl-cce">\u</span>1EA5<span class="pl-cce">\u</span>1EAB<span class="pl-cce">\u</span>1EA9<span class="pl-cce">\u</span>00E3<span class="pl-cce">\u</span>0101<span class="pl-cce">\u</span>0103<span class="pl-cce">\u</span>1EB1<span class="pl-cce">\u</span>1EAF<span class="pl-cce">\u</span>1EB5<span class="pl-cce">\u</span>1EB3<span class="pl-cce">\u</span>0227<span class="pl-cce">\u</span>01E1<span class="pl-cce">\u</span>00E4<span class="pl-cce">\u</span>01DF<span class="pl-cce">\u</span>1EA3<span class="pl-cce">\u</span>00E5<span class="pl-cce">\u</span>01FB<span class="pl-cce">\u</span>01CE<span class="pl-cce">\u</span>0201<span class="pl-cce">\u</span>0203<span class="pl-cce">\u</span>1EA1<span class="pl-cce">\u</span>1EAD<span class="pl-cce">\u</span>1EB7<span class="pl-cce">\u</span>1E01<span class="pl-cce">\u</span>0105<span class="pl-cce">\u</span>2C65<span class="pl-cce">\u</span>0250]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>aa<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A733]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ae<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>00E6<span class="pl-cce">\u</span>01FD<span class="pl-cce">\u</span>01E3]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ao<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A735]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>au<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A737]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>av<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A739<span class="pl-cce">\u</span>A73B]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ay<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A73D]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0062<span class="pl-cce">\u</span>24D1<span class="pl-cce">\u</span>FF42<span class="pl-cce">\u</span>1E03<span class="pl-cce">\u</span>1E05<span class="pl-cce">\u</span>1E07<span class="pl-cce">\u</span>0180<span class="pl-cce">\u</span>0183<span class="pl-cce">\u</span>0253]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>c<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0063<span class="pl-cce">\u</span>24D2<span class="pl-cce">\u</span>FF43<span class="pl-cce">\u</span>0107<span class="pl-cce">\u</span>0109<span class="pl-cce">\u</span>010B<span class="pl-cce">\u</span>010D<span class="pl-cce">\u</span>00E7<span class="pl-cce">\u</span>1E09<span class="pl-cce">\u</span>0188<span class="pl-cce">\u</span>023C<span class="pl-cce">\u</span>A73F<span class="pl-cce">\u</span>2184]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0064<span class="pl-cce">\u</span>24D3<span class="pl-cce">\u</span>FF44<span class="pl-cce">\u</span>1E0B<span class="pl-cce">\u</span>010F<span class="pl-cce">\u</span>1E0D<span class="pl-cce">\u</span>1E11<span class="pl-cce">\u</span>1E13<span class="pl-cce">\u</span>1E0F<span class="pl-cce">\u</span>0111<span class="pl-cce">\u</span>018C<span class="pl-cce">\u</span>0256<span class="pl-cce">\u</span>0257<span class="pl-cce">\u</span>A77A]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>dz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01F3<span class="pl-cce">\u</span>01C6]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>e<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0065<span class="pl-cce">\u</span>24D4<span class="pl-cce">\u</span>FF45<span class="pl-cce">\u</span>00E8<span class="pl-cce">\u</span>00E9<span class="pl-cce">\u</span>00EA<span class="pl-cce">\u</span>1EC1<span class="pl-cce">\u</span>1EBF<span class="pl-cce">\u</span>1EC5<span class="pl-cce">\u</span>1EC3<span class="pl-cce">\u</span>1EBD<span class="pl-cce">\u</span>0113<span class="pl-cce">\u</span>1E15<span class="pl-cce">\u</span>1E17<span class="pl-cce">\u</span>0115<span class="pl-cce">\u</span>0117<span class="pl-cce">\u</span>00EB<span class="pl-cce">\u</span>1EBB<span class="pl-cce">\u</span>011B<span class="pl-cce">\u</span>0205<span class="pl-cce">\u</span>0207<span class="pl-cce">\u</span>1EB9<span class="pl-cce">\u</span>1EC7<span class="pl-cce">\u</span>0229<span class="pl-cce">\u</span>1E1D<span class="pl-cce">\u</span>0119<span class="pl-cce">\u</span>1E19<span class="pl-cce">\u</span>1E1B<span class="pl-cce">\u</span>0247<span class="pl-cce">\u</span>025B<span class="pl-cce">\u</span>01DD]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>f<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0066<span class="pl-cce">\u</span>24D5<span class="pl-cce">\u</span>FF46<span class="pl-cce">\u</span>1E1F<span class="pl-cce">\u</span>0192<span class="pl-cce">\u</span>A77C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0067<span class="pl-cce">\u</span>24D6<span class="pl-cce">\u</span>FF47<span class="pl-cce">\u</span>01F5<span class="pl-cce">\u</span>011D<span class="pl-cce">\u</span>1E21<span class="pl-cce">\u</span>011F<span class="pl-cce">\u</span>0121<span class="pl-cce">\u</span>01E7<span class="pl-cce">\u</span>0123<span class="pl-cce">\u</span>01E5<span class="pl-cce">\u</span>0260<span class="pl-cce">\u</span>A7A1<span class="pl-cce">\u</span>1D79<span class="pl-cce">\u</span>A77F]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0068<span class="pl-cce">\u</span>24D7<span class="pl-cce">\u</span>FF48<span class="pl-cce">\u</span>0125<span class="pl-cce">\u</span>1E23<span class="pl-cce">\u</span>1E27<span class="pl-cce">\u</span>021F<span class="pl-cce">\u</span>1E25<span class="pl-cce">\u</span>1E29<span class="pl-cce">\u</span>1E2B<span class="pl-cce">\u</span>1E96<span class="pl-cce">\u</span>0127<span class="pl-cce">\u</span>2C68<span class="pl-cce">\u</span>2C76<span class="pl-cce">\u</span>0265]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hv<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0195]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0069<span class="pl-cce">\u</span>24D8<span class="pl-cce">\u</span>FF49<span class="pl-cce">\u</span>00EC<span class="pl-cce">\u</span>00ED<span class="pl-cce">\u</span>00EE<span class="pl-cce">\u</span>0129<span class="pl-cce">\u</span>012B<span class="pl-cce">\u</span>012D<span class="pl-cce">\u</span>00EF<span class="pl-cce">\u</span>1E2F<span class="pl-cce">\u</span>1EC9<span class="pl-cce">\u</span>01D0<span class="pl-cce">\u</span>0209<span class="pl-cce">\u</span>020B<span class="pl-cce">\u</span>1ECB<span class="pl-cce">\u</span>012F<span class="pl-cce">\u</span>1E2D<span class="pl-cce">\u</span>0268<span class="pl-cce">\u</span>0131]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>j<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006A<span class="pl-cce">\u</span>24D9<span class="pl-cce">\u</span>FF4A<span class="pl-cce">\u</span>0135<span class="pl-cce">\u</span>01F0<span class="pl-cce">\u</span>0249]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>k<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006B<span class="pl-cce">\u</span>24DA<span class="pl-cce">\u</span>FF4B<span class="pl-cce">\u</span>1E31<span class="pl-cce">\u</span>01E9<span class="pl-cce">\u</span>1E33<span class="pl-cce">\u</span>0137<span class="pl-cce">\u</span>1E35<span class="pl-cce">\u</span>0199<span class="pl-cce">\u</span>2C6A<span class="pl-cce">\u</span>A741<span class="pl-cce">\u</span>A743<span class="pl-cce">\u</span>A745<span class="pl-cce">\u</span>A7A3]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>l<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006C<span class="pl-cce">\u</span>24DB<span class="pl-cce">\u</span>FF4C<span class="pl-cce">\u</span>0140<span class="pl-cce">\u</span>013A<span class="pl-cce">\u</span>013E<span class="pl-cce">\u</span>1E37<span class="pl-cce">\u</span>1E39<span class="pl-cce">\u</span>013C<span class="pl-cce">\u</span>1E3D<span class="pl-cce">\u</span>1E3B<span class="pl-cce">\u</span>017F<span class="pl-cce">\u</span>0142<span class="pl-cce">\u</span>019A<span class="pl-cce">\u</span>026B<span class="pl-cce">\u</span>2C61<span class="pl-cce">\u</span>A749<span class="pl-cce">\u</span>A781<span class="pl-cce">\u</span>A747]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>lj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01C9]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006D<span class="pl-cce">\u</span>24DC<span class="pl-cce">\u</span>FF4D<span class="pl-cce">\u</span>1E3F<span class="pl-cce">\u</span>1E41<span class="pl-cce">\u</span>1E43<span class="pl-cce">\u</span>0271<span class="pl-cce">\u</span>026F]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006E<span class="pl-cce">\u</span>24DD<span class="pl-cce">\u</span>FF4E<span class="pl-cce">\u</span>01F9<span class="pl-cce">\u</span>0144<span class="pl-cce">\u</span>00F1<span class="pl-cce">\u</span>1E45<span class="pl-cce">\u</span>0148<span class="pl-cce">\u</span>1E47<span class="pl-cce">\u</span>0146<span class="pl-cce">\u</span>1E4B<span class="pl-cce">\u</span>1E49<span class="pl-cce">\u</span>019E<span class="pl-cce">\u</span>0272<span class="pl-cce">\u</span>0149<span class="pl-cce">\u</span>A791<span class="pl-cce">\u</span>A7A5]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>nj<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01CC]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>006F<span class="pl-cce">\u</span>24DE<span class="pl-cce">\u</span>FF4F<span class="pl-cce">\u</span>00F2<span class="pl-cce">\u</span>00F3<span class="pl-cce">\u</span>00F4<span class="pl-cce">\u</span>1ED3<span class="pl-cce">\u</span>1ED1<span class="pl-cce">\u</span>1ED7<span class="pl-cce">\u</span>1ED5<span class="pl-cce">\u</span>00F5<span class="pl-cce">\u</span>1E4D<span class="pl-cce">\u</span>022D<span class="pl-cce">\u</span>1E4F<span class="pl-cce">\u</span>014D<span class="pl-cce">\u</span>1E51<span class="pl-cce">\u</span>1E53<span class="pl-cce">\u</span>014F<span class="pl-cce">\u</span>022F<span class="pl-cce">\u</span>0231<span class="pl-cce">\u</span>00F6<span class="pl-cce">\u</span>022B<span class="pl-cce">\u</span>1ECF<span class="pl-cce">\u</span>0151<span class="pl-cce">\u</span>01D2<span class="pl-cce">\u</span>020D<span class="pl-cce">\u</span>020F<span class="pl-cce">\u</span>01A1<span class="pl-cce">\u</span>1EDD<span class="pl-cce">\u</span>1EDB<span class="pl-cce">\u</span>1EE1<span class="pl-cce">\u</span>1EDF<span class="pl-cce">\u</span>1EE3<span class="pl-cce">\u</span>1ECD<span class="pl-cce">\u</span>1ED9<span class="pl-cce">\u</span>01EB<span class="pl-cce">\u</span>01ED<span class="pl-cce">\u</span>00F8<span class="pl-cce">\u</span>01FF<span class="pl-cce">\u</span>0254<span class="pl-cce">\u</span>A74B<span class="pl-cce">\u</span>A74D<span class="pl-cce">\u</span>0275]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>oi<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>01A3]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ou<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0223]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>oo<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A74F]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>p<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0070<span class="pl-cce">\u</span>24DF<span class="pl-cce">\u</span>FF50<span class="pl-cce">\u</span>1E55<span class="pl-cce">\u</span>1E57<span class="pl-cce">\u</span>01A5<span class="pl-cce">\u</span>1D7D<span class="pl-cce">\u</span>A751<span class="pl-cce">\u</span>A753<span class="pl-cce">\u</span>A755]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>q<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0071<span class="pl-cce">\u</span>24E0<span class="pl-cce">\u</span>FF51<span class="pl-cce">\u</span>024B<span class="pl-cce">\u</span>A757<span class="pl-cce">\u</span>A759]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0072<span class="pl-cce">\u</span>24E1<span class="pl-cce">\u</span>FF52<span class="pl-cce">\u</span>0155<span class="pl-cce">\u</span>1E59<span class="pl-cce">\u</span>0159<span class="pl-cce">\u</span>0211<span class="pl-cce">\u</span>0213<span class="pl-cce">\u</span>1E5B<span class="pl-cce">\u</span>1E5D<span class="pl-cce">\u</span>0157<span class="pl-cce">\u</span>1E5F<span class="pl-cce">\u</span>024D<span class="pl-cce">\u</span>027D<span class="pl-cce">\u</span>A75B<span class="pl-cce">\u</span>A7A7<span class="pl-cce">\u</span>A783]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0073<span class="pl-cce">\u</span>24E2<span class="pl-cce">\u</span>FF53<span class="pl-cce">\u</span>00DF<span class="pl-cce">\u</span>015B<span class="pl-cce">\u</span>1E65<span class="pl-cce">\u</span>015D<span class="pl-cce">\u</span>1E61<span class="pl-cce">\u</span>0161<span class="pl-cce">\u</span>1E67<span class="pl-cce">\u</span>1E63<span class="pl-cce">\u</span>1E69<span class="pl-cce">\u</span>0219<span class="pl-cce">\u</span>015F<span class="pl-cce">\u</span>023F<span class="pl-cce">\u</span>A7A9<span class="pl-cce">\u</span>A785<span class="pl-cce">\u</span>1E9B]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>t<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0074<span class="pl-cce">\u</span>24E3<span class="pl-cce">\u</span>FF54<span class="pl-cce">\u</span>1E6B<span class="pl-cce">\u</span>1E97<span class="pl-cce">\u</span>0165<span class="pl-cce">\u</span>1E6D<span class="pl-cce">\u</span>021B<span class="pl-cce">\u</span>0163<span class="pl-cce">\u</span>1E71<span class="pl-cce">\u</span>1E6F<span class="pl-cce">\u</span>0167<span class="pl-cce">\u</span>01AD<span class="pl-cce">\u</span>0288<span class="pl-cce">\u</span>2C66<span class="pl-cce">\u</span>A787]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>tz<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A729]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>u<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0075<span class="pl-cce">\u</span>24E4<span class="pl-cce">\u</span>FF55<span class="pl-cce">\u</span>00F9<span class="pl-cce">\u</span>00FA<span class="pl-cce">\u</span>00FB<span class="pl-cce">\u</span>0169<span class="pl-cce">\u</span>1E79<span class="pl-cce">\u</span>016B<span class="pl-cce">\u</span>1E7B<span class="pl-cce">\u</span>016D<span class="pl-cce">\u</span>00FC<span class="pl-cce">\u</span>01DC<span class="pl-cce">\u</span>01D8<span class="pl-cce">\u</span>01D6<span class="pl-cce">\u</span>01DA<span class="pl-cce">\u</span>1EE7<span class="pl-cce">\u</span>016F<span class="pl-cce">\u</span>0171<span class="pl-cce">\u</span>01D4<span class="pl-cce">\u</span>0215<span class="pl-cce">\u</span>0217<span class="pl-cce">\u</span>01B0<span class="pl-cce">\u</span>1EEB<span class="pl-cce">\u</span>1EE9<span class="pl-cce">\u</span>1EEF<span class="pl-cce">\u</span>1EED<span class="pl-cce">\u</span>1EF1<span class="pl-cce">\u</span>1EE5<span class="pl-cce">\u</span>1E73<span class="pl-cce">\u</span>0173<span class="pl-cce">\u</span>1E77<span class="pl-cce">\u</span>1E75<span class="pl-cce">\u</span>0289]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>v<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0076<span class="pl-cce">\u</span>24E5<span class="pl-cce">\u</span>FF56<span class="pl-cce">\u</span>1E7D<span class="pl-cce">\u</span>1E7F<span class="pl-cce">\u</span>028B<span class="pl-cce">\u</span>A75F<span class="pl-cce">\u</span>028C]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>vy<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>A761]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>w<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0077<span class="pl-cce">\u</span>24E6<span class="pl-cce">\u</span>FF57<span class="pl-cce">\u</span>1E81<span class="pl-cce">\u</span>1E83<span class="pl-cce">\u</span>0175<span class="pl-cce">\u</span>1E87<span class="pl-cce">\u</span>1E85<span class="pl-cce">\u</span>1E98<span class="pl-cce">\u</span>1E89<span class="pl-cce">\u</span>2C73]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0078<span class="pl-cce">\u</span>24E7<span class="pl-cce">\u</span>FF58<span class="pl-cce">\u</span>1E8B<span class="pl-cce">\u</span>1E8D]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>y<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0079<span class="pl-cce">\u</span>24E8<span class="pl-cce">\u</span>FF59<span class="pl-cce">\u</span>1EF3<span class="pl-cce">\u</span>00FD<span class="pl-cce">\u</span>0177<span class="pl-cce">\u</span>1EF9<span class="pl-cce">\u</span>0233<span class="pl-cce">\u</span>1E8F<span class="pl-cce">\u</span>00FF<span class="pl-cce">\u</span>1EF7<span class="pl-cce">\u</span>1E99<span class="pl-cce">\u</span>1EF5<span class="pl-cce">\u</span>01B4<span class="pl-cce">\u</span>024F<span class="pl-cce">\u</span>1EFF]</span><span class="pl-pds">/</span>g</span>},</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">			{<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>z<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>letters<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>007A<span class="pl-cce">\u</span>24E9<span class="pl-cce">\u</span>FF5A<span class="pl-cce">\u</span>017A<span class="pl-cce">\u</span>1E91<span class="pl-cce">\u</span>017C<span class="pl-cce">\u</span>017E<span class="pl-cce">\u</span>1E93<span class="pl-cce">\u</span>1E95<span class="pl-cce">\u</span>01B6<span class="pl-cce">\u</span>0225<span class="pl-cce">\u</span>0240<span class="pl-cce">\u</span>2C6C<span class="pl-cce">\u</span>A763]</span><span class="pl-pds">/</span>g</span>}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">		]</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">$.fn</span>.<span class="pl-en">quicksearch</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">opt</span>) {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">removeDiacritics</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> changes <span class="pl-k">=</span> $.quicksearch.diacriticsRemovalMap;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span>changes.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> str.<span class="pl-c1">replace</span>(changes[i].letters, changes[i].base);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> timeout, cache, rowcache, jq_results, val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, last_val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, </td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			self <span class="pl-k">=</span> <span class="pl-v">this</span>, </td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			options <span class="pl-k">=</span> $.extend({}, $.quicksearch.defaults, opt);</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Assure selectors</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">		options.noResults <span class="pl-k">=</span> <span class="pl-k">!</span>options.noResults <span class="pl-k">?</span> $() <span class="pl-k">:</span> $(options.noResults);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">		options.loader <span class="pl-k">=</span> <span class="pl-k">!</span>options.loader <span class="pl-k">?</span> $() <span class="pl-k">:</span> $(options.loader);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">go</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">				numMatchedRows <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">				noresults <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">				query,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">				val_empty <span class="pl-k">=</span> (val.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (options.removeDiacritics) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> self.removeDiacritics(val);</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			query <span class="pl-k">=</span> options.prepareQuery(val);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> rowcache.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (query.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> query[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> options.minValLength) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">					options.show.<span class="pl-c1">apply</span>(rowcache[i]);</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">					noresults <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">					numMatchedRows<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (val_empty <span class="pl-k">||</span> options.testQuery(query, cache[i], rowcache[i])) {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">					options.show.<span class="pl-c1">apply</span>(rowcache[i]);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">					noresults <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">					numMatchedRows<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">					options.hide.<span class="pl-c1">apply</span>(rowcache[i]);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (noresults) {</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.results(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.results(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.stripe();</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.matchedResultsCount <span class="pl-k">=</span> numMatchedRows;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.loader(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			options.onAfter.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			last_val <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * External API so that users can perform search programatically. </span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * */</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">search</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">submittedVal</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">			val <span class="pl-k">=</span> submittedVal;</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">			self.trigger();</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * External API so that users can perform search programatically. </span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * */</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">reset</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">			val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">			<span class="pl-v">this</span>.loader(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">			options.onBefore.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">window</span>.<span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">			timeout <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">				self.<span class="pl-c1">go</span>();</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">			}, options.delay);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * External API to get the number of matched results as seen in </span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * https://github.com/ruiz107/quicksearch/commit/f78dc440b42d95ce9caed1d087174dd4359982d6</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * */</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">currentMatchedResults</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.matchedResultsCount;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">stripe</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> options.stripeRows <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> options.stripeRows <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> joined <span class="pl-k">=</span> options.stripeRows.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> stripeRows_length <span class="pl-k">=</span> options.stripeRows.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">				jq_results.not(<span class="pl-s"><span class="pl-pds">&#39;</span>:hidden<span class="pl-pds">&#39;</span></span>).each(<span class="pl-k">function</span> (<span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">					$(<span class="pl-v">this</span>).removeClass(joined).addClass(options.stripeRows[i <span class="pl-k">%</span> stripeRows_length]);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">strip_html</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> output <span class="pl-k">=</span> input.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;[^&lt;]+<span class="pl-cce">\\</span>&gt;<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>), <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			output <span class="pl-k">=</span> $.trim(output.<span class="pl-c1">toLowerCase</span>());</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">results</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">bool</span>) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!!</span>options.noResults.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">				options.noResults[bool <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">loader</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">bool</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!!</span>options.loader.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">				options.loader[bool <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>]();</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">cache</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">doRedraw</span>) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">			doRedraw <span class="pl-k">=</span> (<span class="pl-k">typeof</span> doRedraw <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> true <span class="pl-k">:</span> doRedraw;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			jq_results <span class="pl-k">=</span> $(target).not(options.noResults);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> t <span class="pl-k">=</span> (<span class="pl-k">typeof</span> options.selector <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> jq_results.<span class="pl-c1">find</span>(options.selector) <span class="pl-k">:</span> jq_results;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			cache <span class="pl-k">=</span> t.map(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> temp <span class="pl-k">=</span> self.strip_html(<span class="pl-v">this</span>.innerHTML);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> options.removeDiacritics <span class="pl-k">?</span> self.removeDiacritics(temp) <span class="pl-k">:</span> temp;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			rowcache <span class="pl-k">=</span> jq_results.map(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * Modified fix for sync-ing &quot;val&quot;. </span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * Original fix https://github.com/michaellwest/quicksearch/commit/4ace4008d079298a01f97f885ba8fa956a9703d1</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * */</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			val <span class="pl-k">=</span> val <span class="pl-k">||</span> <span class="pl-v">this</span>.val() <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (doRedraw) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-c1">go</span>();</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">trigger</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ((val.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> options.minValLength <span class="pl-k">&amp;&amp;</span> val.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> last_val.<span class="pl-c1">length</span>) <span class="pl-k">||</span> (val.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> options.minValLength<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> val.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> last_val.<span class="pl-c1">length</span>)) {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">				options.onValTooSmall.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, val);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">				self.<span class="pl-c1">go</span>();</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.loader(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">				options.onBefore.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">window</span>.<span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">				timeout <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">					self.<span class="pl-c1">go</span>();</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">				}, options.delay);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.cache();</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.results(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.stripe();</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">		<span class="pl-v">this</span>.loader(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			$(<span class="pl-v">this</span>).on(options.bind, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> $(<span class="pl-v">this</span>).val();</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">				self.trigger();</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">			$(<span class="pl-v">this</span>).on(options.resetBind, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">				self.<span class="pl-c1">reset</span>();</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">}(jQuery, <span class="pl-v">this</span>, <span class="pl-c1">document</span>));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08994s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-+Ec97OckLaaiDVIxNjSIGzl1xSzrqh5sOBV8DyYYVpE=" src="https://assets-cdn.github.com/assets/frameworks-f8473dece7242da6a20d52313634881b3975c52cebaa1e6c38157c0f26185691.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-RWx/8z+RPn4JHpeLIDkJh2lHOLedo2jph+vW7L5WtRU=" src="https://assets-cdn.github.com/assets/github-456c7ff33f913e7e091e978b20390987694738b79da368e987ebd6ecbe56b515.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

