<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('home/home.html.twig', [

        ]);
    }


    #[Route("/download",name:"download_file")]
    public function downloadFileAction(): BinaryFileResponse
    {
        $file = '../assets/pdf/cv-lhermenier-julien.pdf';
        $response = new BinaryFileResponse($file);
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT,'cv-lhermenier-julien.pdf');
        return $response;
    }

}
