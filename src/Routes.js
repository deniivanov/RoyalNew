import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  Account as AccountView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={CareerListingView}
        exact
        layout={MainLayout}
        path="/career-listing"
      />
      <RouteWithLayout
        component={CareerListingMinimalView}
        exact
        layout={MainLayout}
        path="/career-listing-minimal"
      />
      <RouteWithLayout
        component={CareerOpeningView}
        exact
        layout={MainLayout}
        path="/career-opening"
      />
      <RouteWithLayout
        component={ContactPageView}
        exact
        layout={MainLayout}
        path="/contact-page"
      />
      <RouteWithLayout
        component={CoworkingView}
        exact
        layout={MainLayout}
        path="/coworking"
      />
      <RouteWithLayout
        component={ElearningView}
        exact
        layout={MainLayout}
        path="/e-learning"
      />
      <RouteWithLayout
        component={EnterpriseView}
        exact
        layout={MainLayout}
        path="/enterprise"
      />
      <RouteWithLayout
        component={ServiceView}
        exact
        layout={MainLayout}
        path="/service"
      />
      <RouteWithLayout
        component={WebBasicView}
        exact
        layout={MainLayout}
        path="/web-basic"
      />
      <RouteWithLayout
        component={DesktopAppView}
        exact
        layout={MainLayout}
        path="/desktop-app"
      />
      <RouteWithLayout
        component={ExpoView}
        exact
        layout={MainLayout}
        path="/expo"
      />
      <RouteWithLayout
        component={AgencyView}
        exact
        layout={MainLayout}
        path="/agency"
      />
      <RouteWithLayout
        component={StartupView}
        exact
        layout={MainLayout}
        path="/startup"
      />
      <RouteWithLayout
        component={DesignCompanyView}
        exact
        layout={MainLayout}
        path="/design-company"
      />
      <RouteWithLayout
        component={MobileAppView}
        exact
        layout={MainLayout}
        path="/mobile-app"
      />
      <RouteWithLayout
        component={JobListingView}
        exact
        layout={MainLayout}
        path="/job-listing"
      />
      <RouteWithLayout
        component={RentalView}
        exact
        layout={MainLayout}
        path="/rental"
      />
      <RouteWithLayout
        component={CloudHostingView}
        exact
        layout={MainLayout}
        path="/cloud-hosting"
      />
      <RouteWithLayout
        component={LogisticsView}
        exact
        layout={MainLayout}
        path="/logistics"
      />
      <RouteWithLayout
        component={EcommerceView}
        exact
        layout={MainLayout}
        path="/e-commerce"
      />
      <RouteWithLayout
        component={PricingView}
        exact
        layout={MainLayout}
        path="/pricing"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        component={HelpCenterView}
        exact
        layout={MainLayout}
        path="/help-center"
      />
      <RouteWithLayout
        component={HelpCenterArticleView}
        exact
        layout={MainLayout}
        path="/help-center-article"
      />
      <RouteWithLayout
        component={PortfolioPageView}
        exact
        layout={MainLayout}
        path="/portfolio-page"
      />
      <RouteWithLayout
        component={PortfolioMasonryView}
        exact
        layout={MainLayout}
        path="/portfolio-masonry"
      />
      <RouteWithLayout
        component={PortfolioGridView}
        exact
        layout={MainLayout}
        path="/portfolio-grid"
      />
      <RouteWithLayout
        component={CompanyTermsView}
        exact
        layout={MainLayout}
        path="/company-terms"
      />
      <RouteWithLayout
        component={ContactPageSidebarMapView}
        exact
        layout={MainLayout}
        path="/contact-sidebar-map"
      />
      <RouteWithLayout
        component={ContactPageCoverView}
        exact
        layout={MainLayout}
        path="/contact-page-cover"
      />
      <RouteWithLayout
        component={AboutSideCoverView}
        exact
        layout={MainLayout}
        path="/about-side-cover"
      />
      <RouteWithLayout
        component={BlogSearchView}
        exact
        layout={MainLayout}
        path="/blog-search"
      />
      <RouteWithLayout
        component={BlogNewsroomView}
        exact
        layout={MainLayout}
        path="/blog-newsroom"
      />
      <RouteWithLayout
        component={BlogArticleView}
        exact
        layout={MainLayout}
        path="/blog-article"
      />
      <RouteWithLayout
        component={BlogReachViewView}
        exact
        layout={MainLayout}
        path="/blog-reach-view"
      />
      <RouteWithLayout
        component={PasswordResetCoverView}
        exact
        layout={MinimalLayout}
        path="/password-reset-cover"
      />
      <RouteWithLayout
        component={PasswordResetSimpleView}
        exact
        layout={MinimalLayout}
        path="/password-reset-simple"
      />
      <RouteWithLayout
        component={SigninSimpleView}
        exact
        layout={MinimalLayout}
        path="/signin-simple"
      />
      <RouteWithLayout
        component={SigninCoverView}
        exact
        layout={MinimalLayout}
        path="/signin-cover"
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MinimalLayout}
        path="/signup-simple"
      />
      <RouteWithLayout
        component={SignupCoverView}
        exact
        layout={MinimalLayout}
        path="/signup-cover"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account/:pageId?"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={NotFoundCoverView}
        exact
        layout={MinimalLayout}
        path="/not-found-cover"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
