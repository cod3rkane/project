<?php
/**
 * Created by PhpStorm.
 * User: jkane
 * Date: 5/28/16
 * Time: 8:13 PM
 */

namespace Application\Controller;


use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class PublicationsController extends AbstractActionController
{
  public function indexAction()
  {
    return new ViewModel();
  }
  
  public function postAction()
  {
    $postId = $this->params()->fromRoute('post');
    return new ViewModel();
  }
}