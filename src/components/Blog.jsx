import React from 'react';
import { Code, Network, Wrench } from 'lucide-react';

const Blog = () => {
  return (
    <div className="container mx-auto p-8 pt-24"> {/* Added pt-24 to account for fixed navbar */}
      <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-blue mb-4">Introduction à LangChain, LangGraph et MCP : Des outils pour des agents IA puissants</h1>
        <p className="text-base mb-6">
          LangChain et LangGraph sont des frameworks puissants pour développer des applications d'intelligence artificielle basées sur des modèles de langage (LLM). Le protocole MCP (Model Context Protocol) standardise l'accès des LLM aux outils externes, permettant une intégration fluide et efficace.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3 flex items-center"><Code className="mr-2" /> LangChain</h2>
        <p className="text-base mb-2">
          LangChain est un framework open-source disponible en Python et JavaScript, conçu pour faciliter la construction d'applications alimentées par des LLMs. Il fournit des composants modulaires pour la gestion de contexte, l'intégration d'outils externes, et la gestion de la mémoire conversationnelle.
        </p>
        <p className="text-base mb-2">
          Ses fonctionnalités clés incluent les **Chaînes (LCEL)** pour orchestrer des séquences d'appels LLM, les **agents** pour permettre aux LLMs d'interagir avec leur environnement, et la **mémoire contextuelle** pour maintenir l'historique des conversations. Il offre également une intégration robuste avec diverses bases de données comme PostgreSQL et MongoDB.
        </p>
        <p className="text-base mb-4">
          **Exemple :** Création d’un agent conversationnel capable de répondre à des questions complexes en utilisant des données provenant de sources externes.
        </p>
        <p className="text-base mb-6">
          <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">En savoir plus sur LangChain</a>
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3 flex items-center"><Network className="mr-2" /> LangGraph</h2>
        <p className="text-base mb-2">
          LangGraph est une extension de LangChain qui permet de créer des agents IA "stateful" avec des workflows graphiques. Cela signifie que les agents peuvent maintenir un état interne et prendre des décisions basées sur cet état, ce qui est crucial pour des interactions complexes et des orchestrations multi-agents.
        </p>
        <p className="text-base mb-4">
          **Fonctionnalités :** Gestion d'états, orchestrations multi-agents, et intégration transparente avec des outils externes via le protocole MCP.
        </p>
        <p className="text-base mb-4">
          **Exemple :** Mon projet HOLOKIA-AVATAR utilise LangGraph pour orchestrer un workflow multimodal complexe, intégrant la reconnaissance vocale, la synthèse vocale et les LLMs pour des avatars virtuels interactifs.
        </p>
        <p className="text-base mb-6">
          <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">En savoir plus sur LangGraph</a>
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3 flex items-center"><Wrench className="mr-2" /> MCP (Model Context Protocol)</h2>
        <p className="text-base mb-2">
          Le MCP, développé par Anthropic, est un protocole open-source qui standardise la manière dont les LLMs accèdent et interagissent avec des outils et des données externes. Il permet une communication structurée entre les modèles et les serveurs d'outils, facilitant l'intégration de fonctionnalités complexes.
        </p>
        <p className="text-base mb-4">
          **Fonctionnalités :** Connexion à des serveurs d'outils (comme GitHub, des bases de données, des APIs météo) via des transports standardisés tels que Streamable HTTP ou stdio.
        </p>
        <p className="text-base mb-4">
          **Exemple :** Intégration d'un serveur MCP pour fournir des données météorologiques en temps réel à un agent LangGraph, lui permettant de répondre à des questions sur la météo actuelle.
        </p>
        <p className="text-base mb-6">
          <a href="https://docs.langchain.com/docs/langgraph/concepts/server-mcp/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">En savoir plus sur MCP</a>
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">Conclusion</h2>
        <p className="text-base mb-6">
          Ces outils, LangChain, LangGraph et MCP, sont essentiels pour construire des agents IA robustes, modulaires et capables d'interagir de manière sophistiquée avec le monde extérieur. Ils sont au cœur de nombreux projets innovants, y compris mes propres réalisations comme HOLOKIA-AVATAR.
        </p>

        <p className="text-base">
          Retrouvez mes projets sur GitHub : <a href="https://github.com/Natsu-eng" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">https://github.com/Natsu-eng</a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
