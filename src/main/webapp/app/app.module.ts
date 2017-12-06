import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { WebPaymentExtractSharedModule, UserRouteAccessService } from './shared';
import { WebPaymentExtractAppRoutingModule} from './app-routing.module';
import { WebPaymentExtractHomeModule } from './home/home.module';
import { WebPaymentExtractAdminModule } from './admin/admin.module';
import { WebPaymentExtractAccountModule } from './account/account.module';
import { WebPaymentExtractEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        WebPaymentExtractAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        WebPaymentExtractSharedModule,
        WebPaymentExtractHomeModule,
        WebPaymentExtractAdminModule,
        WebPaymentExtractAccountModule,
        WebPaymentExtractEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class WebPaymentExtractAppModule {}
