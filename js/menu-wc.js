'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sgpc documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' : 'data-target="#xs-components-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' :
                                            'id="xs-components-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfessorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfessorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditTurmaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditTurmaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormProfessorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormProfessorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormTurmaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTurmaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaProfessorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaProfessorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaTurmaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaTurmaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TecnologiasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TecnologiasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' : 'data-target="#xs-pipes-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' :
                                            'id="xs-pipes-links-module-AppModule-7ef8ba1e08a98316183eb62693e021c89c03284ddded1511dbb8679afebee018029c22df0c3ecc57c1a7ce4a17d9a9a1eeb22c762fda548cd66e6d293386a1e2"' }>
                                            <li class="link">
                                                <a href="pipes/DateTimePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTimePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Categorias.html" data-type="entity-link" >Categorias</a>
                            </li>
                            <li class="link">
                                <a href="classes/Professor.html" data-type="entity-link" >Professor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Professores.html" data-type="entity-link" >Professores</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tecnologias.html" data-type="entity-link" >Tecnologias</a>
                            </li>
                            <li class="link">
                                <a href="classes/Turma.html" data-type="entity-link" >Turma</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriasService.html" data-type="entity-link" >CategoriasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfessorService.html" data-type="entity-link" >ProfessorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TecnologiasService.html" data-type="entity-link" >TecnologiasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TurmaService.html" data-type="entity-link" >TurmaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});